"use client";

import { useRef, useState, type FormEvent } from "react";
import { trackMetaEvent } from "@/lib/analytics/meta-client";
import { afinaPrograms, afinaWhatsAppUrl } from "@/data/afina";
import { ArrowIcon } from "@/components/ui/icons";
import { AfinaIcon } from "./afina-icon";
import styles from "./afina.module.css";

export function AfinaContactForm() {
  const [program, setProgram] = useState<string>(afinaPrograms[0].id);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const submission = useRef<{ payload: string; id: string } | null>(null);
  const inFlight = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current || status === "success") return;
    const form = event.currentTarget;
    const values = new FormData(form);
    const phone = String(values.get("phone") ?? "");
    const digits = phone.replace(/\D/g, "");
    const phoneInput = form.elements.namedItem("phone") as HTMLInputElement;
    if (digits.length < 7 || digits.length > 15 || /[^\d\s()+-]/.test(phone)) {
      phoneInput.setCustomValidity("Ingresa un número de teléfono válido, incluido el código de país.");
      phoneInput.reportValidity();
      return;
    }
    const payload = JSON.stringify({
      program,
      need: String(values.get("need") ?? "").trim(),
      name: String(values.get("name") ?? "").trim(),
      email: String(values.get("email") ?? "").trim(),
      company: String(values.get("company") ?? "").trim(),
      phone: phone.trim(),
    });
    if (submission.current?.payload !== payload) {
      submission.current = { payload, id: crypto.randomUUID() };
    }
    inFlight.current = true;
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/afina/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...JSON.parse(payload), requestId: submission.current.id }),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || result.accepted !== true) {
        throw new Error(typeof result.error === "string" ? result.error : "No pudimos enviar tu solicitud.");
      }
      setStatus("success");
      try {
        trackMetaEvent("Lead");
      } catch {
        // Analytics must not turn an accepted email into a failed submission.
      }
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error && cause.name === "Error"
        ? cause.message
        : "No pudimos conectar con el servicio. Inténtalo nuevamente o escríbenos por WhatsApp.");
    } finally {
      inFlight.current = false;
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-busy={status === "sending"} onChange={() => { if (!inFlight.current) setStatus("idle"); }}>
      <div className={styles.quickContact}>
        <span className={styles.whatsappCircle}><AfinaIcon name="whatsapp" /></span>
        <div><strong>¿Prefieres conversar rápido?</strong><p>Podemos orientarte directamente por chat.</p></div>
        <a href={afinaWhatsAppUrl()} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp <ArrowIcon /></a>
      </div>

      <fieldset className={styles.programFieldset} disabled={status === "sending"}>
        <legend>1. Selecciona la capacitación de tu interés</legend>
        <div className={styles.radioGrid}>
          {afinaPrograms.map((item) => (
            <label key={item.id} className={styles.radioOption}>
              <input type="radio" name="program" value={item.id} required checked={program === item.id} onChange={() => setProgram(item.id)} />
              <span>{item.title}</span>
            </label>
          ))}
          <label className={`${styles.radioOption} ${styles.customOption}`}>
            <input type="radio" name="program" value="a-medida" required checked={program === "a-medida"} onChange={() => setProgram("a-medida")} />
            <span>Programa a medida / Otra necesidad<small>Según el diagnóstico y los objetivos de tu equipo.</small></span>
          </label>
        </div>
        {program === "a-medida" && <label className={styles.needField}>¿Qué necesita fortalecer tu equipo?<textarea name="need" required rows={3} maxLength={1000} placeholder="Cuéntanos qué habilidad o reto te gustaría trabajar." /></label>}
      </fieldset>

      <fieldset className={styles.detailsFieldset} disabled={status === "sending"}>
        <legend>2. Déjanos tus datos para agendar una reunión</legend>
        <div className={styles.fieldsGrid}>
          <label>Nombre y apellido<input name="name" autoComplete="name" required minLength={2} maxLength={120} placeholder="Ej. Carlos Mendoza" /></label>
          <label>Correo electrónico<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="Ej. carlos@empresa.com" /></label>
          <label>Empresa / Cargo<input name="company" autoComplete="organization" required maxLength={160} placeholder="Ej. Mi empresa / Recursos Humanos" /></label>
          <label>Número de teléfono<input name="phone" type="tel" autoComplete="tel" inputMode="tel" required minLength={7} maxLength={24} placeholder="+51 999 999 999" onInput={(event) => event.currentTarget.setCustomValidity("")} /></label>
          <button type="submit" className={styles.submitButton} disabled={status === "sending" || status === "success"}>{status === "sending" ? "Enviando…" : status === "success" ? "Información enviada" : "Enviar información"} <ArrowIcon /></button>
        </div>
      </fieldset>
      <p className={styles.formNote}>Todos los campos son obligatorios. Un asesor se pondrá en contacto contigo.</p>
      <div aria-live="polite" aria-atomic="true">
        {status === "success" && <p className={styles.formStatus}>Tu solicitud se envió correctamente. Un asesor se pondrá en contacto contigo.</p>}
        {status === "error" && <p className={`${styles.formStatus} ${styles.formError}`}>{error}</p>}
      </div>
    </form>
  );
}
