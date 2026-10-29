import { isIP } from "node:net";
import type { MetaEventName } from "../../components/analytics/meta-pixel-config";

type Config = {
  pixelId: string;
  accessToken: string;
  testEventCode?: string;
  development?: boolean;
};

type ConversionInput = {
  event_name: MetaEventName;
  event_id: string;
  event_time: number;
  event_source_url: string;
  fbclid?: string;
};

const MAX_BODY_BYTES = 4096;
const GRAPH_API_VERSION = "v26.0";

function json(body: object, status: number) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function isConversionInput(input: unknown): input is ConversionInput {
  if (!input || typeof input !== "object") return false;
  const value = input as Record<string, unknown>;
  const now = Math.floor(Date.now() / 1000);
  return (
    typeof value.event_name === "string" &&
    ["PageView", "Contact", "Lead"].includes(value.event_name) &&
    typeof value.event_id === "string" &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value.event_id) &&
    typeof value.event_time === "number" &&
    Number.isInteger(value.event_time) &&
    value.event_time >= now - 3600 && value.event_time <= now + 60 &&
    typeof value.event_source_url === "string" && value.event_source_url.length <= 2048 &&
    (value.fbclid === undefined || (typeof value.fbclid === "string" && /^[a-zA-Z0-9_-]{1,500}$/.test(value.fbclid)))
  );
}

function metaCookie(request: Request, name: string) {
  const raw = request.headers.get("cookie")?.split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${name}=`))?.slice(name.length + 1);
  if (!raw) return undefined;
  try {
    const value = decodeURIComponent(raw);
    return /^fb\.\d+\.\d+\.[a-zA-Z0-9._-]{1,500}$/.test(value) ? value : undefined;
  } catch {
    return undefined;
  }
}

export async function handleMetaConversion(
  request: Request,
  config: Config,
  fetcher: typeof fetch = fetch,
) {
  // Next.js may normalize request.url to localhost behind its dev server/proxy.
  // Use the incoming Host and the proxy's HTTP(S) scheme for origin checks.
  const requestUrl = new URL(request.url);
  const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0].trim();
  const protocol = forwardedProtocol === "https" || forwardedProtocol === "http"
    ? `${forwardedProtocol}:` : requestUrl.protocol;
  const origin = new URL(`${protocol}//${request.headers.get("host") ?? requestUrl.host}`).origin;
  if (request.headers.get("origin") !== origin || request.headers.get("sec-fetch-site") === "cross-site") {
    return json({ error: "Origen no permitido." }, 403);
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return json({ error: "Se requiere JSON." }, 415);
  }
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) {
    return json({ error: "Evento demasiado grande." }, 413);
  }

  let input: unknown;
  try {
    const text = await request.text();
    if (Buffer.byteLength(text) > MAX_BODY_BYTES) return json({ error: "Evento demasiado grande." }, 413);
    input = JSON.parse(text);
  } catch {
    return json({ error: "JSON no válido." }, 400);
  }
  if (!isConversionInput(input)) return json({ error: "Evento no válido." }, 400);

  let source: URL;
  try {
    source = new URL(input.event_source_url);
    if (source.origin !== origin || source.username || source.password) throw new Error();
  } catch {
    return json({ error: "URL no válida." }, 400);
  }
  source.search = "";
  source.hash = "";
  if (input.event_name === "Lead" && source.pathname !== "/afina") {
    return json({ error: "Evento no válido para esta página." }, 400);
  }

  const testEventCode = config.testEventCode?.trim();
  const isLocal = ["localhost", "127.0.0.1", "[::1]"].includes(source.hostname);
  // Local development must not produce server events without an explicit test code.
  if ((config.development || isLocal) && !testEventCode) {
    return json({ skipped: true, reason: "test_code_required" }, 200);
  }
  if (!config.accessToken.trim()) return json({ error: "API de conversiones sin configurar." }, 503);

  const agent = request.headers.get("user-agent");
  if (!agent) return json({ error: "Falta el agente del navegador." }, 400);
  const forwardedIp = (request.headers.get("x-vercel-forwarded-for") ?? request.headers.get("x-forwarded-for"))?.split(",")[0].trim();
  const fbp = metaCookie(request, "_fbp");
  const fbc = metaCookie(request, "_fbc") ?? (input.fbclid ? `fb.1.${input.event_time * 1000}.${input.fbclid}` : undefined);
  const event = {
    event_name: input.event_name,
    event_id: input.event_id,
    event_time: input.event_time,
    action_source: "website",
    event_source_url: source.href,
    user_data: {
      client_user_agent: agent.slice(0, 2048),
      ...(forwardedIp && isIP(forwardedIp) ? { client_ip_address: forwardedIp } : {}),
      ...(fbp ? { fbp } : {}),
      ...(fbc ? { fbc } : {}),
    },
  };

  const body = new URLSearchParams({
    access_token: config.accessToken.trim(),
    data: JSON.stringify([event]),
    ...(testEventCode ? { test_event_code: testEventCode } : {}),
  });

  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const response = await fetcher(`https://graph.facebook.com/${GRAPH_API_VERSION}/${config.pixelId}/events`, {
        method: "POST",
        body,
        cache: "no-store",
        signal: AbortSignal.timeout(5000),
      });
      const result = await response.json();
      if (response.ok && result.events_received === 1) {
        if (config.development) console.info("[Meta CAPI] Evento aceptado:", input.event_name);
        return json({ accepted: true }, 200);
      }
      if (attempt === 0 && (response.status === 429 || response.status >= 500 || result.error?.is_transient)) continue;
      // Only numeric diagnostics: never log the token, payload or Meta's raw message.
      console.error("[Meta CAPI] Evento rechazado", {
        status: response.status,
        code: typeof result.error?.code === "number" ? result.error.code : undefined,
        subcode: typeof result.error?.error_subcode === "number" ? result.error.error_subcode : undefined,
      });
      return json({ error: "Meta no aceptó el evento." }, 502);
    } catch {
      if (attempt === 0) continue;
      console.error("[Meta CAPI] No se pudo conectar con Meta.");
    }
  }
  return json({ error: "No se pudo enviar el evento." }, 502);
}
