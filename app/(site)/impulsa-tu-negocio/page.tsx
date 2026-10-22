import type { Metadata } from "next";
import { BusinessHero } from "@/components/business-growth/business-hero";
import { BusinessSolutions } from "@/components/business-growth/business-solutions";
import { BusinessProcess } from "@/components/business-growth/business-process";

export const metadata: Metadata = {
  title: "Impulsa tu negocio | Expándete Más",
  description: "Haz que más personas conozcan tu negocio y se conviertan en clientes. Publicidad digital, producción audiovisual, páginas web y automatización de WhatsApp.",
};

export default function BusinessGrowthPage() {
  return (
    <main id="contenido">
      <BusinessHero />
      <BusinessSolutions />
      <BusinessProcess />
    </main>
  );
}
