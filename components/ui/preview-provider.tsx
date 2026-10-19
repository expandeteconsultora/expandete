"use client";

import { createContext, useContext, useEffect, useRef, useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import { services } from "@/data/services";
import { CloseIcon, GraduationIcon } from "./icons";

type Preview = (typeof services)[number]["id"] | "club" | "resources" | "privacy" | "terms";
const PreviewContext = createContext<((preview: Preview) => void) | null>(null);

const extraPreviews = {
  club: { title: "Club Expándete Más", description: "Aprende hoy lo que tu negocio necesita mañana. Un espacio de formación y comunidad para seguir creciendo.", features: ["Formaciones prácticas", "Encuentros en vivo", "Comunidad de emprendedores"] },
  resources: { title: "Recursos para tu negocio", description: "Aquí encontrarás los recursos de Expándete Más. Esta sección estará disponible al incorporar las próximas páginas del sitio.", features: [] },
  privacy: { title: "Política de privacidad", description: "El contenido de la política de privacidad se incorporará antes de la publicación del sitio. Esta versión de demostración no incluye formularios ni herramientas de seguimiento.", features: [] },
  terms: { title: "Términos y condiciones", description: "Los términos y condiciones se incorporarán antes de la publicación del sitio. El contenido actual es una vista previa de los servicios y la plataforma de formación.", features: [] },
};

export function PreviewProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<Preview | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const service = services.find((item) => item.id === active);
  const content = service ? { title: service.name, description: service.detail, features: service.features } : active && active in extraPreviews ? extraPreviews[active as keyof typeof extraPreviews] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!active || !dialog) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => { dialog.close(); document.body.style.overflow = previousOverflow; previousFocus?.focus(); };
  }, [active]);

  return (
    <PreviewContext.Provider value={setActive}>
      {children}
      <dialog ref={dialogRef} className="preview-dialog fixed m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-3xl bg-white p-7 text-foreground shadow-2xl sm:p-10" aria-labelledby="preview-title" aria-describedby="preview-description" onCancel={() => setActive(null)} onClose={() => setActive(null)} onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setActive(null);
      }}>
        <button type="button" aria-label="Cerrar ventana" onClick={() => setActive(null)} className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-slate-100 text-navy transition-colors hover:bg-slate-200"><CloseIcon /></button>
        {content && <>
          <GraduationIcon className="mb-5 size-9 text-brand-green" />
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-blue">Expándete Más</p>
          <h2 id="preview-title" className="pr-5 text-3xl font-extrabold leading-tight tracking-tight">{content.title}</h2>
          <p id="preview-description" className="mt-4 text-base leading-relaxed text-muted">{content.description}</p>
          {content.features.length > 0 && <ul className="mt-6 space-y-3">{content.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm font-medium"><span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700" aria-hidden="true">✓</span>{feature}</li>)}</ul>}
          <button type="button" className="action-button mt-8 w-full bg-brand-blue hover:bg-navy" onClick={() => setActive(null)}>Seguir explorando</button>
        </>}
      </dialog>
    </PreviewContext.Provider>
  );
}

export function PreviewButton({ preview, children, onClick, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { preview: Preview }) {
  const open = useContext(PreviewContext);
  return <button type="button" {...props} onClick={(event) => { onClick?.(event); if (!event.defaultPrevented) open?.(preview); }}>{children}</button>;
}
