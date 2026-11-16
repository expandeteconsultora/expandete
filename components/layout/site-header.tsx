"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/navigation";
import { Brand } from "@/components/ui/brand";
import { CloseIcon } from "@/components/ui/icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const coursesButton = useRef<HTMLButtonElement>(null);

  const closeMenus = () => {
    setIsOpen(false);
    setIsCoursesOpen(false);
  };

  useEffect(() => {
    if (!isOpen && !isCoursesOpen) return;

    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (isCoursesOpen) {
        setIsCoursesOpen(false);
        coursesButton.current?.focus();
      } else {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) {
        setIsOpen(false);
        setIsCoursesOpen(false);
      }
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => {
      setIsOpen(false);
      setIsCoursesOpen(false);
    };

    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", onResize);
    };
  }, [isOpen, isCoursesOpen]);

  return (
    <header ref={header} className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="page-container relative flex min-h-22 items-center justify-between gap-8 md:min-h-[clamp(80px,7.8vw,112px)]">
        <Link href="/#descubre" aria-label="Expándete Más, inicio" onClick={closeMenus}><Brand className="text-[34px] md:text-[clamp(28px,2.9vw,42px)]" /></Link>
        <button ref={menuButton} type="button" className="flex size-11 items-center justify-center rounded-lg border border-white/25 bg-navy/50 md:hidden" aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isOpen} aria-controls="menu-principal" onClick={() => { setIsOpen(!isOpen); setIsCoursesOpen(false); }}>
          {isOpen ? <CloseIcon /> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>}
        </button>
        <nav id="menu-principal" aria-label="Navegación principal" className={(isOpen ? "flex " : "hidden ") + "absolute inset-x-0 top-[calc(100%-4px)] flex-col gap-2 rounded-2xl border border-white/15 bg-navy p-5 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-5 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:ml-auto lg:gap-8"}>
          {navigation.map((item, index) => "children" in item ? (
            <div
              key={item.label}
              className="relative"
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse" && window.matchMedia("(min-width: 768px) and (hover: hover)").matches) {
                  setIsCoursesOpen(true);
                }
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === "mouse" && !event.currentTarget.contains(document.activeElement) && window.matchMedia("(min-width: 768px) and (hover: hover)").matches) {
                  setIsCoursesOpen(false);
                }
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setIsCoursesOpen(false);
              }}
            >
              <button
                ref={coursesButton}
                type="button"
                className="nav-link flex w-fit items-center gap-2 whitespace-nowrap"
                aria-expanded={isCoursesOpen}
                aria-controls="menu-cursos"
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              >
                {item.label}
                <svg className={"size-3 transition-transform " + (isCoursesOpen ? "rotate-180" : "")} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m3 4.5 3 3 3-3" />
                </svg>
              </button>
              <div id="menu-cursos" hidden={!isCoursesOpen} className="pt-1 md:absolute md:right-0 md:top-full md:w-72">
                <div className="rounded-xl border border-white/15 bg-navy p-2 shadow-xl">
                  {item.children.map((course) => (
                    <Link
                      key={course.href}
                      href={course.href}
                      className="block rounded-lg px-3 py-3 text-sm font-semibold leading-6 text-white transition-colors hover:bg-white/10 hover:text-green-300 focus-visible:bg-white/10"
                      aria-current={course.href === pathname ? "page" : undefined}
                      onClick={closeMenus}
                    >
                      {course.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link key={item.label} href={item.href} className="nav-link w-fit whitespace-nowrap" aria-current={(index === 0 && pathname === "/") || item.href === pathname ? "page" : undefined} onClick={closeMenus}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
