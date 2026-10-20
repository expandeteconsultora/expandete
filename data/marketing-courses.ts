/**
 * CONFIGURACIÓN DE WHATSAPP
 * Cambia aquí el número de destino y el campo `whatsappMessage` de cada curso.
 * Número en formato internacional: código de país + número, sin espacios ni +.
 * El mensaje se codifica automáticamente; admite acentos, emojis y saltos de línea.
 */
export const whatsappNumber = "51954989320";

export const marketingCourses = [
  {
    id: "marketing-digital",
    title: "Marketing Digital Aplicado a Negocios",
    titleLines: ["Marketing Digital", "Aplicado a Negocios"],
    modality: "Presencial y virtual",
    image: "/images/courses/course-marketing.webp",
    imageAlt: "Ilustración de una laptop con estadísticas y un megáfono verde",
    whatsappMessage:
      "¡Hola, Expándete Más! Me interesa el curso Marketing Digital Aplicado a Negocios. Quisiera información sobre fechas, horarios, modalidad y precios. ¡Gracias!",
  },
  {
    id: "edicion-capcut",
    title: "Edición de Videos con CapCut",
    titleLines: ["Edición de Videos", "con CapCut"],
    modality: "Presencial y virtual",
    image: "/images/courses/course-capcut.webp",
    imageAlt: "Ilustración de un teléfono con una línea de edición de video y el icono de CapCut",
    whatsappMessage:
      "¡Hola, Expándete Más! Me interesa el curso Edición de Videos con CapCut. Quisiera información sobre fechas, horarios, modalidad y precios. ¡Gracias!",
  },
  {
    id: "produccion-ia",
    title: "Producción Audiovisual con Inteligencia Artificial",
    titleLines: ["Producción Audiovisual", "con Inteligencia Artificial"],
    modality: "Solo presencial",
    image: "/images/courses/course-ai.webp",
    imageAlt: "Ilustración de un robot junto a una pantalla de video y una claqueta de cine",
    whatsappMessage:
      "¡Hola, Expándete Más! Me interesa el curso Producción Audiovisual con Inteligencia Artificial. Quisiera información sobre las próximas fechas presenciales, horarios y precios. ¡Gracias!",
  },
  {
    id: "publicidad-digital",
    title: "Publicidad y Estrategia Digital",
    titleLines: ["Publicidad y", "Estrategia Digital"],
    modality: "Presencial y virtual",
    image: "/images/courses/course-ads.webp",
    imageAlt: "Ilustración de un panel de anuncios, una gráfica de crecimiento y un objetivo",
    whatsappMessage:
      "¡Hola, Expándete Más! Me interesa el curso Publicidad y Estrategia Digital. Quisiera información sobre fechas, horarios, modalidad y precios. ¡Gracias!",
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
