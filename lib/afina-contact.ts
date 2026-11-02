type ContactConfig = {
  apiKey: string;
  from: string;
  to: string;
  programs: readonly { id: string; title: string }[];
};

const MAX_BODY_BYTES = 8192;
const SEND_ERROR = "No pudimos enviar tu solicitud. Inténtalo nuevamente o escríbenos por WhatsApp.";

function json(body: object, status: number) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function handleAfinaContact(
  request: Request,
  config: ContactConfig,
  fetcher: typeof fetch = fetch,
) {
  const url = new URL(request.url);
  const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0].trim();
  const protocol = forwardedProtocol === "https" || forwardedProtocol === "http"
    ? `${forwardedProtocol}:` : url.protocol;
  const origin = new URL(`${protocol}//${request.headers.get("host") ?? url.host}`).origin;
  if (request.headers.get("origin") !== origin || request.headers.get("sec-fetch-site") === "cross-site") {
    return json({ error: "Origen no permitido." }, 403);
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return json({ error: "Se requiere JSON." }, 415);
  }
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) {
    return json({ error: "Solicitud demasiado grande." }, 413);
  }

  let input: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) {
      return json({ error: "Solicitud demasiado grande." }, 413);
    }
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid input");
    input = parsed as Record<string, unknown>;
  } catch {
    return json({ error: "Solicitud no válida." }, 400);
  }

  const field = (key: string) => typeof input[key] === "string" ? input[key].trim() : "";
  const name = field("name");
  const email = field("email");
  const company = field("company");
  const phone = field("phone");
  const program = field("program");
  const need = field("need");
  const requestId = field("requestId");
  const selected = config.programs.find((item) => item.id === program);
  const digits = phone.replace(/\D/g, "");
  if (
    name.length < 2 || name.length > 120 || /[\r\n]/.test(name) ||
    !email || email.length > 254 || !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i.test(email) ||
    !company || company.length > 160 || /[\r\n]/.test(company) ||
    phone.length > 24 || digits.length < 7 || digits.length > 15 || /[^\d\s()+-]/.test(phone) ||
    (!selected && program !== "a-medida") ||
    (program === "a-medida" && (!need || need.length > 1000)) ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId)
  ) {
    return json({ error: "Revisa los datos del formulario y completa los campos requeridos." }, 400);
  }

  if (!config.apiKey || !config.from || !config.to) {
    return json({ error: SEND_ERROR }, 503);
  }

  const text = [
    "Nueva solicitud de información — Afina",
    "",
    `Programa de interés: ${selected?.title ?? "Programa a medida / Otra necesidad"}`,
    ...(program === "a-medida" ? [`Necesidad: ${need}`] : []),
    `Nombre: ${name}`,
    `Correo electrónico: ${email}`,
    `Empresa / cargo: ${company}`,
    `Teléfono de contacto: ${phone}`,
  ].join("\n");

  try {
    const response = await fetcher("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `afina/${requestId}`,
      },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        subject: "Nueva solicitud de información — Afina",
        text,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      // Do not log credentials, contact details or the provider's raw response.
      console.error("[Afina] Resend rechazó el envío", { status: response.status });
      return json({ error: SEND_ERROR }, 502);
    }
    const result = await response.json();
    if (typeof result?.id !== "string" || !result.id) {
      return json({ error: SEND_ERROR }, 502);
    }
    return json({ accepted: true }, 200);
  } catch {
    return json({ error: SEND_ERROR }, 502);
  }
}
