"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { usePathname } from "next/navigation";
import { whatsappConfig as config, whatsappUrl, type WhatsAppIconName } from "@/data/whatsapp";
import { CloseIcon } from "@/components/ui/icons";
import styles from "./whatsapp-widget.module.css";

function Icon({ name }: { name: WhatsAppIconName }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === "whatsapp" && <><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.8A8.5 8.5 0 1 1 20.5 11.6Z" /><path d="M8.1 7.5c-.8.7-.7 2.3.8 4.3 1.6 2.1 4 3.6 5.6 3.1.7-.2 1.2-.9 1.3-1.6l-2.4-1.1-.9 1c-1.3-.6-2.4-1.7-3-2.9l.8-1-1.1-2Z" /></>}
    {name === "megaphone" && <><path d="m4 10 14-5v14L4 14Zm14-1 3-1v8l-3-1M7 15l1 5h4l-2-4" /></>}
    {name === "graduation" && <><path d="m2 9 10-5 10 5-10 5Zm4 3v6c4 3 8 3 12 0v-6M22 9v8" /></>}
    {name === "team" && <><circle cx="9" cy="8" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v3" /></>}
  </svg>;
}

export function WhatsAppWidget() {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const pathname = usePathname();
  const open = openPath === pathname;
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  function closeAndFocus() {
    setOpenPath(null);
    trigger.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    function outside(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpenPath(null);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        trigger.current?.focus();
      }
    }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  if (!config.enabled) return null;

  return <div ref={root} className={styles.widget} style={{ "--wa-blue": config.colors.blue, "--wa-green": config.colors.green, "--wa-white": config.colors.white } as CSSProperties}
    onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenPath(null); }}>
    <button ref={trigger} type="button" className={styles.trigger} aria-expanded={open} aria-controls={panelId}
      onClick={() => setOpenPath(open ? null : pathname)}>
      <span className={styles.whatsappIcon}><Icon name={config.icon} /></span>
      <span>{config.title}</span>
    </button>
    <section id={panelId} aria-label={config.title} className={styles.panel} data-open={open} inert={!open} aria-hidden={!open}>
      <div className={styles.header}>
        <span>{config.title}</span>
        <button type="button" className={styles.close} aria-label="Cerrar opciones de WhatsApp" onClick={closeAndFocus}><CloseIcon /></button>
      </div>
      <ul className={styles.options}>
        {config.options.map((option) => <li key={option.label}>
          <a href={whatsappUrl(option.message)} target="_blank" rel="noopener noreferrer" onClick={closeAndFocus}>
            <span className={styles.optionIcon}><Icon name={option.icon} /></span>
            <span>{option.label}</span>
          </a>
        </li>)}
      </ul>
    </section>
  </div>;
}
