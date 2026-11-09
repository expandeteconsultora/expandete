export type WhatsAppIconName = "whatsapp" | "megaphone" | "graduation" | "team";

export const whatsappConfig = {
  enabled: true,
  phone: "51954989320",
  title: "¿Qué estás buscando?",
  icon: "whatsapp" as WhatsAppIconName,
  colors: { blue: "#134487", green: "#42AA34", white: "#FFFFFF" },
  options: [
    { icon: "megaphone", label: "Publicidad para tu negocio", message: "Información del servicio de publicidad." },
    { icon: "graduation", label: "Cursos de marketing", message: "Información de cursos de marketing digital." },
    { icon: "team", label: "Equipos y procesos empresariales", message: "Información del servicio de equipos y procesos empresariales." },
  ] satisfies { icon: WhatsAppIconName; label: string; message: string }[],
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappConfig.phone}?text=${encodeURIComponent(message)}`;
}
