"use client";

import { useState, type FormEvent } from "react";
import { trackMetaEvent } from "@/lib/analytics/meta-client";
import { afinaPrograms, afinaWhatsAppUrl } from "@/data/afina";
import { ArrowIcon } from "@/components/ui/icons";
import { AfinaIcon } from "./afina-icon";
import styles from "./afina.module.css";

export function AfinaContactForm() {
  const [program, setProgram] = useState<string>(afinaPrograms[0].id);
  const [preparedUrl, setPreparedUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
    const selected = afinaPrograms.find((item) => item.id === program)?.title ?? `Programa a medida: ${String(values.get("need") ?? "").trim()}`;
    const message = [
      "Hola, quiero información sobre las capacitaciones de Afina.",
      `Programa de interés: ${selected}`,
      `Nombre: ${String(values.get("name")).trim()}`,
      `Empresa / cargo: ${String(values.get("company")).trim()}`,
      `Teléfono de contacto: ${phone.trim()}`,
    ].join("\n");
    const url = afinaWhatsAppUrl(message);
    if (preparedUrl !== url) trackMetaEvent("Lead");
    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} onChange={() => setPreparedUrl("")}>
      <div className={styles.quickContact}>
        <span className={styles.whatsappCircle}><AfinaIcon name="whatsapp" /></span>
        <div><strong>¿Prefieres conversar rápido?</strong><p>Podemos orientarte directamente por chat.</p></div>
        <a href={afinaWhatsAppUrl()} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp <ArrowIcon /></a>
      </div>

      <fieldset className={styles.programFieldset}>
        <legend>1. Selecciona la capacitación de tu interés</legend>
        <div className={styles.radioGrid}>
          {afinaPrograms.map((item) => (
            <label key={item.id} className={styles.radioOption}>
              <input type="radio" name="program" value={item.id} checked={program === item.id} onChange={() => setProgram(item.id)} />
              <span>{item.title}</span>
            </label>
          ))}
          <label className={`${styles.radioOption} ${styles.customOption}`}>
            <input type="radio" name="program" value="a-medida" checked={program === "a-medida"} onChange={() => setProgram("a-medida")} />
            <span>Programa a medida / Otra necesidad<small>Según el diagnóstico y los objetivos de tu equipo.</small></span>
          </label>
        </div>
        {program === "a-medida" && <label className={styles.needField}>¿Qué necesita fortalecer tu equipo?<textarea name="need" required rows={3} maxLength={1000} placeholder="Cuéntanos qué habilidad o reto te gustaría trabajar." /></label>}
      </fieldset>

      <fieldset className={styles.detailsFieldset}>
        <legend>2. Déjanos tus datos para continuar por WhatsApp</legend>
        <div className={styles.fieldsGrid}>
          <label>Nombre y apellido<input name="name" autoComplete="name" required minLength={2} maxLength={120} placeholder="Ej. Carlos Mendoza" /></label>
          <label>Empresa / Cargo<input name="company" autoComplete="organization" required maxLength={160} placeholder="Ej. Mi empresa / Recursos Humanos" /></label>
          <label>Número de teléfono<input name="phone" type="tel" autoComplete="tel" inputMode="tel" required minLength={7} maxLength={24} placeholder="+51 999 999 999" onInput={(event) => event.currentTarget.setCustomValidity("")} /></label>
          <button type="submit" className={styles.submitButton}>Enviar información <ArrowIcon /></button>
        </div>
      </fieldset>
      <p className={styles.formNote}>Se abrirá WhatsApp con tus datos para que envíes la solicitud.</p>
      <div aria-live="polite">{preparedUrl && <p className={styles.formStatus}>Tu solicitud está lista. <a href={preparedUrl} target="_blank" rel="noopener noreferrer">Continuar en WhatsApp <ArrowIcon /></a></p>}</div>
    </form>
  );
}
