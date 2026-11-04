"use client";

import { useEffect, useId, useRef, useState } from "react";
import { businessContact } from "@/data/business-growth";
import { CloseIcon } from "@/components/ui/icons";
import { BusinessIcon } from "./business-icon";
import styles from "./business-growth.module.css";

export function BusinessScheduleButton() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button type="button" className={`${styles.contactButton} ${styles.scheduleButton}`} aria-haspopup="dialog" disabled={!businessContact.schedulingUrl} onClick={() => setOpen(true)}>
        <BusinessIcon name="calendar" />
        <span>Agendar una asesoría</span>
      </button>
      <dialog ref={dialogRef} className={styles.scheduleDialog} aria-labelledby={titleId} onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setOpen(false);
      }}>
        <div className={styles.scheduleHeader}>
          <h2 id={titleId}>Agendar una asesoría</h2>
          <button type="button" className={styles.scheduleClose} aria-label="Cerrar calendario" autoFocus onClick={() => setOpen(false)}><CloseIcon /></button>
        </div>
        {open && <iframe className={styles.scheduleCalendar} src={businessContact.schedulingUrl} title="Calendario para agendar una asesoría" />}
        <a className={styles.scheduleFallback} href={businessContact.schedulingUrl} target="_blank" rel="noopener noreferrer">¿No carga el calendario? Abrir en Google Calendar ↗</a>
      </dialog>
    </>
  );
}
