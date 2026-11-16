import { whatsappUrl } from "@/data/whatsapp";

export const socialAdsCourses = [
  {
    id: "publicidad-multiplataforma",
    name: "Publicidad en Redes Sociales: Facebook, Instagram, WhatsApp y TikTok",
    specialty: "Facebook, Instagram, WhatsApp y TikTok",
    badge: "Formación completa",
    featured: true,
    classes: 6,
    hours: 12,
    schedule: "Lunes, miércoles y viernes de 8:00 p. m. a 10:00 p. m.",
    description:
      "Aprende de manera práctica en Tarapoto para dominar anuncios y generación de videos con IA.",
    learning: [
      "Generación de videos con IA para crear anuncios atractivos para tu negocio.",
      "Campañas que lleven clientes directamente a tu WhatsApp, Facebook e Instagram.",
      "Creación de contenido publicitario con IA listo para publicar.",
      "Lanzamiento de campañas en TikTok Ads para llegar a más clientes.",
      "Análisis e interpretación de métricas, costo por lead y retorno de inversión.",
    ],
    price: 250,
    reservation: 50,
  },
  {
    id: "facebook-instagram-ia",
    name: "Publicidad en Redes Sociales: Facebook e Instagram Ads + Creación de imágenes con IA",
    specialty: "Facebook e Instagram Ads + Creación de imágenes con IA",
    badge: "Rápido y práctico",
    featured: false,
    classes: 4,
    hours: 6,
    schedule: "Martes y jueves de 8:00 p. m. a 9:30 p. m.",
    description:
      "Aprende las bases y configura tus primeras campañas de venta directa, paso a paso.",
    learning: [
      "Creación de imágenes con IA atractivas para tus anuncios.",
      "Lanzamiento de campañas para llegar a más clientes en Facebook e Instagram.",
      "Campañas que lleven clientes a tu WhatsApp listos para comprar.",
      "Seguimiento e interpretación de los resultados clave de tus campañas.",
    ],
    price: 150,
    reservation: 50,
  },
] as const;

export function socialAdsWhatsappUrl(courseName: string, action: "reserve" | "consult") {
  return whatsappUrl(action === "reserve"
    ? `Quiero reservar mi vacante en el curso de ${courseName}`
    : `Quiero consultar sobre el curso de ${courseName}`);
}

export const socialAdsLearning = [
  {
    title: "Generación de videos con IA para tus anuncios",
    description: "Crearás contenido publicitario con herramientas de inteligencia artificial de forma práctica y sencilla.",
    image: "/images/courses/aprendizaje-videos-ia.webp",
    imageAlt: "Participantes de una capacitación de Expándete Más trabajando con sus laptops",
    icon: "video",
  },
  {
    title: "Configurarás campañas publicitarias",
    description: "Aprenderás a lanzar campañas en redes sociales, desde la configuración hasta la publicación de tus anuncios.",
    image: "/images/courses/aprendizaje-campanas.webp",
    imageAlt: "Participante diseñando contenido publicitario en su laptop durante una clase",
    icon: "megaphone",
  },
  {
    title: "Analizarás y optimizarás tus resultados",
    description: "Interpretarás las métricas y aprenderás a mejorar el rendimiento de tus campañas para tu negocio.",
    image: "/images/courses/aprendizaje-optimizacion.webp",
    imageAlt: "Alumnos en una clase sobre creatividad y optimización de campañas publicitarias",
    icon: "trend",
  },
] as const;

export const socialAdsVideos = [
  { id: "huNK0f5HmEk", label: "Experiencia de alumnos · 01" },
  { id: "wCz2WREGMos", label: "Experiencia de alumnos · 02" },
  { id: "hoLEsA_7RiM", label: "Experiencia de alumnos · 03" },
  { id: "j7LlqbFJJhI", label: "Experiencia de alumnos · 04" },
] as const;
