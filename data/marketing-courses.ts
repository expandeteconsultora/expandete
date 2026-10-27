/**
 * CONFIGURACIÓN DE WHATSAPP
 * Cambia aquí el número de destino y el campo `whatsappMessage` de cada curso.
 * Número en formato internacional: código de país + número, sin espacios ni +.
 * El mensaje se codifica automáticamente; admite acentos, emojis y saltos de línea.
 */
export const whatsappNumber = "51954989320";

export const courseLocation = {
  name: "Sede Tarapoto",
  format: "Clases 100% presenciales",
  maxStudents: 10,
} as const;

export const marketingCourses = [
  {
    id: "meta-ads-ia",
    title: "Publicidad en Meta Ads y diseño de anuncios con IA",
    modality: "100% Presencial · Tarapoto",
    level: "Básico / Intermedio",
    description:
      "Aprende paso a paso sin experiencia previa: crea tus diseños publicitarios con IA y lanza campañas efectivas en Facebook e Instagram.",
    image: "/images/courses/course-meta-ads-tarapoto.webp",
    imageAlt: "Laptop con gráficos de publicidad, un megáfono verde y estadísticas de campañas",
    whatsappMessage:
      "¡Hola, Expándete Más! Me interesa el curso Publicidad en Meta Ads y diseño de anuncios con IA, 100% presencial en la sede Tarapoto. Quisiera información sobre las próximas fechas, horarios, precios y cupos disponibles. ¡Gracias!",
  },
  {
    id: "grabacion-video-ia-capcut",
    title: "Grabación y edición de videos con IA y CapCut",
    modality: "100% Presencial · Tarapoto",
    level: "Básico / Intermedio",
    description:
      "Desde cero y 100% guiado: aprende a grabar con tu celular y editar videos con herramientas de IA para promocionar tu negocio.",
    image: "/images/courses/course-video-ia-tarapoto.webp",
    imageAlt: "Robot con una claqueta de cine junto a una pantalla de video con inteligencia artificial",
    whatsappMessage:
      "¡Hola, Expándete Más! Me interesa el curso Grabación y edición de videos con IA y CapCut, 100% presencial en la sede Tarapoto. Quisiera información sobre las próximas fechas, horarios, precios y cupos disponibles. ¡Gracias!",
  },
  {
    id: "edicion-capcut",
    title: "Edición de videos con CapCut",
    modality: "100% Presencial · Tarapoto",
    level: "Básico / Intermedio",
    description:
      "Aprende desde cero: cortes, subtítulos dinámicos, música, transiciones y efectos profesionales.",
    image: "/images/courses/course-capcut-tarapoto.webp",
    imageAlt: "Editor de video en un teléfono con el icono de CapCut, tijeras y herramientas de edición",
    whatsappMessage:
      "¡Hola, Expándete Más! Me interesa el curso Edición de videos con CapCut, 100% presencial en la sede Tarapoto. Quisiera información sobre las próximas fechas, horarios, precios y cupos disponibles. ¡Gracias!",
  },
] as const;

export function getCourseWhatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export const courseTools = [
  { id: "capcut", name: "CapCut", image: "/icons/tools/capcut.svg" },
  { id: "chatgpt", name: "ChatGPT", image: "/icons/tools/chatgpt.svg" },
  { id: "canva", name: "Canva", image: "/icons/tools/canva.svg" },
  { id: "meta", name: "Meta Ads", image: "/icons/tools/meta.svg" },
  { id: "tiktok", name: "TikTok Ads", image: "/icons/tools/tiktok.svg" },
  { id: "whatsapp", name: "WhatsApp Business", image: "/icons/tools/whatsapp.svg" },
  { id: "google-ads", name: "Google Ads", image: "/icons/tools/google-ads.svg" },
  { id: "ai", name: "IA", image: "/icons/tools/ai.svg" },
] as const;

export const trainingPhotos = [
  {
    image: "/images/courses/class-01.webp",
    alt: "Imagen referencial de emprendedores participando en una capacitación con sus laptops",
  },
  {
    image: "/images/courses/class-02.webp",
    alt: "Imagen referencial de un grupo de participantes con sus certificados de capacitación",
  },
  {
    image: "/images/courses/class-03.webp",
    alt: "Imagen referencial de una emprendedora y sus compañeros aprendiendo en clase",
  },
] as const;

export const galleryAutoplayMs = 4500;
