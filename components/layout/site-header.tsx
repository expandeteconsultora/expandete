"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/navigation";
import { Brand } from "@/components/ui/brand";
import { CloseIcon } from "@/components/ui/icons";
import { PreviewButton } from "@/components/ui/preview-provider";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setIsOpen(false); menuButton.current?.focus(); }
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => { if (desktop.matches) setIsOpen(false); };
    document.addEventListener("keydown", close);
    desktop.addEventListener("change", onResize);
    return () => { document.removeEventListener("keydown", close); desktop.removeEventListener("change", onResize); };
  }, [isOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="page-container relative flex min-h-22 items-center justify-between gap-8 md:min-h-[clamp(80px,7.8vw,112px)]">
        <Link href="/#descubre" aria-label="Expándete Más, inicio" onClick={() => setIsOpen(false)}><Brand className="text-[34px] md:text-[clamp(28px,2.9vw,42px)]" /></Link>
        <button ref={menuButton} type="button" className="flex size-11 items-center justify-center rounded-lg border border-white/25 bg-navy/50 md:hidden" aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isOpen} aria-controls="menu-principal" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>}
        </button>
        <nav id="menu-principal" aria-label="Navegación principal" className={(isOpen ? "flex " : "hidden ") + "absolute inset-x-0 top-[calc(100%-4px)] flex-col gap-2 rounded-2xl border border-white/15 bg-navy p-5 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-7 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:ml-[11%] md:mr-auto lg:gap-10"}>
          {navigation.map((item, index) => <Link key={item.label} href={item.href} className="nav-link w-fit whitespace-nowrap" aria-current={index === 0 ? "page" : undefined} onClick={() => setIsOpen(false)}>{item.label}</Link>)}
          <PreviewButton preview="resources" className="nav-link w-fit" onClick={() => setIsOpen(false)}>Recursos</PreviewButton>
        </nav>
      </div>
    </header>
  );
}
