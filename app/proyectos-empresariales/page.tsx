import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Brand } from "@/components/ui/brand";
import { ProjectHero, ProjectProcess, ProjectSectors, ProjectServices, ProjectSupport } from "@/components/projects/project-sections";
import { WhatsAppLink } from "@/components/projects/whatsapp-link";
import styles from "@/components/projects/projects.module.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-project-title", display: "swap" });

export const metadata: Metadata = {
  title: "Proyectos Empresariales y ProInnóvate 2026 | Expándete Más",
  description: "Desarrollamos y presentamos tu proyecto empresarial. Asesoría personalizada para postular a ProInnóvate en San Martín. Escríbenos al 954 989 320.",
};

export default function BusinessProjectsPage() {
  return (
    <div className={`${styles.landing} ${montserrat.variable}`}>
      <header className={styles.header}>
        <nav className={styles.headerInner} aria-label="Navegación de proyectos empresariales">
          <Link href="/" aria-label="Expándete Más, volver al inicio"><Brand className={styles.brand} /></Link>
          <WhatsAppLink compact />
        </nav>
      </header>
      <main id="contenido">
        <ProjectHero />
        <ProjectServices />
        <ProjectSupport />
        <ProjectProcess />
        <ProjectSectors />
      </main>
      <footer className={styles.footer}>
        <p>© 2026 Expándete Más · Asesoría integral para fondos no reembolsables de ProInnóvate Perú.</p>
      </footer>
    </div>
  );
}
