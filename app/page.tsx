import { ClubSection } from "@/components/home/club-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { SolutionsSection } from "@/components/home/solutions-section";

export default function HomePage() {
  return (
    <main id="contenido">
      <HeroSection />
      <SolutionsSection />
      <ClubSection />
      <ContactSection />
    </main>
  );
}
