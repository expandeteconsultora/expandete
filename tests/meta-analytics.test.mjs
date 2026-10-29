import assert from "node:assert/strict";
import { test } from "node:test";
import { handleMetaConversion } from "../lib/analytics/meta-conversions.ts";
import { flushMetaPixelEvents, trackMetaEvent } from "../lib/analytics/meta-client.ts";

const origin = "https://example.com";
const config = { pixelId: "12345", accessToken: "secret-for-test", testEventCode: "TEST123" };
const eventId = "c181bdc8-8a5a-4fe9-bcbb-dd04e687da4d";
const event = (overrides = {}) => ({
  event_name: "PageView", event_id: eventId,
  event_time: Math.floor(Date.now() / 1000), event_source_url: `${origin}/`,
  ...overrides,
});
function request(body = event(), headers = {}) {
  return new Request(`${origin}/api/meta/events`, {
    method: "POST",
    headers: { origin, "content-type": "application/json", "user-agent": "Integration test", ...headers },
    body: JSON.stringify(body),
  });
}
const accepted = () => Promise.resolve(Response.json({ events_received: 1 }));
const mustNotFetch = () => { throw new Error("Unexpected call to Meta"); };

test("sends matching event IDs and safe metadata, with no token in the URL or response", async () => {
  let sent;
  const response = await handleMetaConversion(request(event({
    event_source_url: `${origin}/cursos-de-marketing-digital?email=private@example.com#section`,
    user_data: { em: "must-not-forward" },
  }), {
    cookie: "_fbp=fb.1.1793000000000.123456; _fbc=fb.1.1793000000000.ClickID",
    "x-forwarded-for": "192.0.2.1, 10.0.0.1",
  }), config, async (url, options) => {
    sent = JSON.parse(options.body.get("data"))[0];
    assert.equal(url, "https://graph.facebook.com/v26.0/12345/events");
    assert.equal(options.body.get("access_token"), config.accessToken);
    assert.equal(options.body.get("test_event_code"), config.testEventCode);
    assert.equal(options.cache, "no-store");
    return accepted();
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { accepted: true });
  assert.equal(sent.event_id, eventId);
  assert.equal(sent.event_source_url, `${origin}/cursos-de-marketing-digital`);
  assert.equal(sent.action_source, "website");
  assert.deepEqual(sent.user_data, {
    client_user_agent: "Integration test", client_ip_address: "192.0.2.1",
    fbp: "fb.1.1793000000000.123456", fbc: "fb.1.1793000000000.ClickID",
  });
});

test("accepts Contact and Lead, derives fbc only from an actual click ID", async () => {
  for (const name of ["Contact", "Lead"]) {
    const response = await handleMetaConversion(request(event({
      event_name: name, event_source_url: `${origin}/afina`, fbclid: "Actual_Click-ID",
    })), config, async (_, options) => {
      const sent = JSON.parse(options.body.get("data"))[0];
      assert.equal(sent.event_name, name);
      assert.match(sent.user_data.fbc, /^fb\.1\.\d+\.Actual_Click-ID$/);
      assert.equal(sent.user_data.fbp, undefined);
      return accepted();
    });
    assert.equal(response.status, 200);
  }
});

test("rejects cross-origin submissions and mismatched source URLs", async () => {
  assert.equal((await handleMetaConversion(request(event(), { origin: "https://other.example" }), config, mustNotFetch)).status, 403);
  assert.equal((await handleMetaConversion(request(event(), { "sec-fetch-site": "cross-site" }), config, mustNotFetch)).status, 403);
  assert.equal((await handleMetaConversion(request(event({ event_source_url: "https://other.example/" })), config, mustNotFetch)).status, 400);
});

test("origin checks use the incoming host and proxy scheme when Next normalizes the internal URL", async () => {
  const response = await handleMetaConversion(new Request("http://localhost:3000/api/meta/events", {
    method: "POST",
    headers: {
      host: "example.com", "x-forwarded-proto": "https", origin,
      "content-type": "application/json", "user-agent": "Integration test",
    },
    body: JSON.stringify(event()),
  }), config, accepted);
  assert.equal(response.status, 200);
});

test("rejects unknown events, invalid IDs, stale timestamps and Lead on unrelated pages", async () => {
  for (const overrides of [
    { event_name: "Purchase" }, { event_name: ["PageView"] }, { event_id: "invalid" },
    { event_time: 123 }, { event_time: Math.floor(Date.now() / 1000) + 3600 },
    { event_name: "Lead" }, { fbclid: "malformed click id" },
  ]) {
    assert.equal((await handleMetaConversion(request(event(overrides)), config, mustNotFetch)).status, 400);
  }
});

test("rejects non-JSON and oversized payloads", async () => {
  assert.equal((await handleMetaConversion(request(event(), { "content-type": "text/plain" }), config, mustNotFetch)).status, 415);
  assert.equal((await handleMetaConversion(request(event({ padding: "x".repeat(5000) })), config, mustNotFetch)).status, 413);
  const invalid = new Request(`${origin}/api/meta/events`, {
    method: "POST", headers: { origin, "content-type": "application/json" }, body: "{",
  });
  assert.equal((await handleMetaConversion(invalid, config, mustNotFetch)).status, 400);
});

test("development needs a test code; missing production credentials fail without exposing them", async () => {
  const dev = { ...config, testEventCode: "", development: true };
  const response = await handleMetaConversion(request(), dev, mustNotFetch);
  assert.deepEqual(await response.json(), { skipped: true, reason: "test_code_required" });
  assert.equal((await handleMetaConversion(request(), { ...config, accessToken: "" }, mustNotFetch)).status, 503);
});

test("retries a transient rejection once using exactly the same payload and event ID", async () => {
  const calls = [];
  const response = await handleMetaConversion(request(), config, async (_, options) => {
    calls.push(options.body.toString());
    return calls.length === 1 ? Response.json({ error: { is_transient: true } }, { status: 503 }) : accepted();
  });
  assert.equal(response.status, 200);
  assert.equal(calls.length, 2);
  assert.equal(calls[0], calls[1]);
});

test("permanent Meta errors are not retried and raw error messages are not leaked", async () => {
  const originalError = console.error;
  const logs = [];
  console.error = (...args) => logs.push(args);
  try {
    let calls = 0;
    const response = await handleMetaConversion(request(), config, async () => {
      calls++;
      return Response.json({ error: { code: 190, message: config.accessToken } }, { status: 400 });
    });
    assert.equal(calls, 1);
    assert.equal(response.status, 502);
    assert.ok(!JSON.stringify(logs).includes(config.accessToken));
    assert.ok(!(await response.text()).includes(config.accessToken));
  } finally {
    console.error = originalError;
  }
});

test("browser and server share one ID; delayed pixel loading does not prevent server tracking", async () => {
  const originalWindow = globalThis.window;
  const originalFetch = globalThis.fetch;
  const posts = [];
  const pixel = [];
  globalThis.window = { location: { origin, pathname: "/afina", search: "?private=ignore&fbclid=Click123" } };
  globalThis.fetch = async (_, options) => {
    posts.push(JSON.parse(options.body));
    assert.equal(options.keepalive, true);
    return Response.json({ accepted: true });
  };
  try {
    const id = trackMetaEvent("Lead");
    assert.equal(posts[0].event_id, id);
    assert.equal(posts[0].event_source_url, `${origin}/afina`);
    assert.equal(posts[0].fbclid, "Click123");
    globalThis.window.fbq = (...args) => pixel.push(args);
    flushMetaPixelEvents();
    flushMetaPixelEvents();
    assert.deepEqual(pixel, [["track", "Lead", {}, { eventID: id }]]);
    const nextId = trackMetaEvent("Contact");
    assert.notEqual(nextId, id);
    assert.equal(posts[1].event_id, nextId);
    assert.deepEqual(pixel[1], ["track", "Contact", {}, { eventID: nextId }]);
  } finally {
    globalThis.window = originalWindow;
    globalThis.fetch = originalFetch;
  }
});
