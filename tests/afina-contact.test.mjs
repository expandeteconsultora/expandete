import assert from "node:assert/strict";
import { test } from "node:test";
import { handleAfinaContact } from "../lib/afina-contact.ts";
import { afinaPrograms } from "../data/afina.ts";

const origin = "https://example.com";
const config = { apiKey: "test-secret", from: "Afina <onboarding@resend.dev>", to: "inbox@example.com", programs: afinaPrograms };
const input = {
  requestId: "c181bdc8-8a5a-4fe9-bcbb-dd04e687da4d",
  program: "ventas", name: "Ana Prueba", company: "Empresa de prueba",
  email: "ana@example.com",
  phone: "+51 999 999 999", need: "",
};
function request(overrides = {}, headers = {}) {
  return new Request(`${origin}/api/afina/contact`, {
    method: "POST",
    headers: { origin, "content-type": "application/json", ...headers },
    body: JSON.stringify({ ...input, ...overrides }),
  });
}
const mustNotFetch = () => { throw new Error("Unexpected email request"); };

test("sends contact details to the server-configured recipient, with an idempotency key", async () => {
  const response = await handleAfinaContact(request({ to: "attacker@example.com", from: "spoof@example.com" }), config, async (url, options) => {
    assert.equal(url, "https://api.resend.com/emails");
    assert.equal(options.headers.Authorization, `Bearer ${config.apiKey}`);
    assert.equal(options.headers["Idempotency-Key"], `afina/${input.requestId}`);
    const sent = JSON.parse(options.body);
    assert.deepEqual(sent.to, [config.to]);
    assert.equal(sent.from, config.from);
    for (const value of [input.name, input.email, input.company, input.phone, afinaPrograms[0].title]) {
      assert.ok(sent.text.includes(value));
    }
    return Response.json({ id: "test-email-id" });
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { accepted: true });
});

test("includes custom training needs and rejects empty or malformed contact fields", async () => {
  const response = await handleAfinaContact(request({ program: "a-medida", need: "Mejorar la coordinación" }), config, async (_, options) => {
    assert.ok(JSON.parse(options.body).text.includes("Mejorar la coordinación"));
    return Response.json({ id: "test-email-id" });
  });
  assert.equal(response.status, 200);
  for (const overrides of [
    { program: "unknown" }, { program: "a-medida", need: "  " },
    { program: undefined }, { name: undefined }, { company: undefined }, { phone: undefined },
    { email: undefined }, { email: "  " }, { email: ["ana@example.com"] },
    { email: "sin-arroba" }, { email: "ana@" }, { email: "ana @example.com" },
    { email: "ana@example.com\r\nBcc: other@example.com" }, { email: `${"a".repeat(250)}@example.com` },
    { name: " " }, { name: "x".repeat(121) }, { company: " " },
    { phone: "123" }, { phone: "1234567abc" }, { phone: "1".repeat(16) },
    { requestId: "invalid" }, { name: ["Ana"] }, { need: "x".repeat(1001), program: "a-medida" },
  ]) {
    assert.equal((await handleAfinaContact(request(overrides), config, mustNotFetch)).status, 400);
  }
});

test("rejects cross-origin, oversized and malformed requests before contacting Resend", async () => {
  assert.equal((await handleAfinaContact(request({}, { origin: "https://other.example" }), config, mustNotFetch)).status, 403);
  assert.equal((await handleAfinaContact(request({}, { "sec-fetch-site": "cross-site" }), config, mustNotFetch)).status, 403);
  assert.equal((await handleAfinaContact(request({}, { "content-type": "text/plain" }), config, mustNotFetch)).status, 415);
  assert.equal((await handleAfinaContact(request({ padding: "x".repeat(9000) }), config, mustNotFetch)).status, 413);
  const malformed = new Request(`${origin}/api/afina/contact`, {
    method: "POST", headers: { origin, "content-type": "application/json" }, body: "{",
  });
  assert.equal((await handleAfinaContact(malformed, config, mustNotFetch)).status, 400);
});

test("supports the incoming host and scheme behind the Next.js proxy", async () => {
  const response = await handleAfinaContact(new Request("http://localhost:3000/api/afina/contact", {
    method: "POST",
    headers: { host: "example.com", "x-forwarded-proto": "https", origin, "content-type": "application/json" },
    body: JSON.stringify(input),
  }), config, async () => Response.json({ id: "test-email-id" }));
  assert.equal(response.status, 200);
});

test("reports failures without exposing credentials or provider diagnostics", async () => {
  const missing = await handleAfinaContact(request(), { ...config, apiKey: "" }, mustNotFetch);
  assert.equal(missing.status, 503);
  const rejected = await handleAfinaContact(request(), config, async () => Response.json({ message: "private provider diagnostics" }, { status: 403 }));
  assert.equal(rejected.status, 502);
  assert.doesNotMatch(await rejected.text(), /private provider diagnostics|test-secret/);
  const timeout = await handleAfinaContact(request(), config, async () => { throw new DOMException("Timeout", "TimeoutError"); });
  assert.equal(timeout.status, 502);
  const malformed = await handleAfinaContact(request(), config, async () => Response.json({}));
  assert.equal(malformed.status, 502);
});
