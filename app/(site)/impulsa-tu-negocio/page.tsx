import type { Metadata } from "next";
import { BusinessHero } from "@/components/business-growth/business-hero";
import { BusinessTestimonials } from "@/components/business-growth/business-testimonials";
import { BusinessSolutions } from "@/components/business-growth/business-solutions";
import { BusinessProcess } from "@/components/business-growth/business-process";
import { BusinessSystem } from "@/components/business-growth/business-system";
import { BusinessCommercial } from "@/components/business-growth/business-commercial";
import { BusinessContact } from "@/components/business-growth/business-contact";

export const metadata: Metadata = {
  title: "IMPULSA | Expándete Más",
  description: "Integramos marketing, ventas y tecnología para fortalecer el crecimiento de tu empresa. Soluciones digitales, Sistema Expándete+ y desarrollo comercial integral.",
};

export default function BusinessGrowthPage() {
  return (
    <main id="contenido">
      <BusinessHero />
      <BusinessTestimonials />
      <BusinessSolutions />
      <BusinessSystem />
      <BusinessProcess />
      <BusinessCommercial />
      <BusinessContact />
    </main>
  );
}
