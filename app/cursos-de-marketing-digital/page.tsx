import type { Metadata } from "next";
import Link from "next/link";
import { Brand } from "@/components/ui/brand";
import { CoursesHero } from "@/components/courses/courses-hero";
import { ToolsRibbon } from "@/components/courses/tools-ribbon";
import { TrainingGallery } from "@/components/courses/training-gallery";
import styles from "@/components/courses/courses.module.css";

export const metadata: Metadata = {
  title: "Cursos de Marketing Digital para Emprendedores | Expándete Más",
  description:
    "Cursos de Meta Ads, inteligencia artificial y CapCut para emprendedores. Clases 100% presenciales en Tarapoto, máximo 10 alumnos por curso. Consulta por WhatsApp.",
};

export default function MarketingCoursesPage() {
  return (
    <div className={styles.landing}>
      <header className="relative z-10 flex justify-center px-5 pt-9 sm:pt-11 lg:pt-12">
        <Link href="/" aria-label="Expándete Más, volver al inicio">
          <Brand className="text-[clamp(40px,3.9vw,64px)]" />
        </Link>
      </header>
      <main id="contenido">
        <CoursesHero />
        <ToolsRibbon />
        <TrainingGallery />
      </main>
    </div>
  );
}
