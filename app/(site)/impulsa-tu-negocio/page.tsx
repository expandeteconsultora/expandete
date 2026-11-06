import type { Metadata } from "next";
import { BusinessHero } from "@/components/business-growth/business-hero";
import { BusinessTestimonials } from "@/components/business-growth/business-testimonials";
import { BusinessSolutions } from "@/components/business-growth/business-solutions";
import { BusinessSystem } from "@/components/business-growth/business-system";
import { BusinessCta } from "@/components/business-growth/business-cta";

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
      <BusinessCta />
    </main>
  );
}
