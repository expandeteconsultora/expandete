import type { Metadata } from "next";
import { SocialAdsLanding } from "@/components/courses/social-ads-landing";

export const metadata: Metadata = {
  title: "Cursos de Publicidad en Redes Sociales en Tarapoto | Expándete Más",
  description:
    "Aprende a crear contenido con IA y lanzar campañas en Facebook, Instagram, WhatsApp y TikTok. Cursos presenciales en Tarapoto desde S/ 150. Reserva con S/ 50.",
};

export default function SocialAdsCoursePage() {
  return <SocialAdsLanding />;
}
