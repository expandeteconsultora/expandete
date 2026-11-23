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
      "Generación de videos con IA para crear anuncios efectivos para tu negocio.",
      "Campañas que lleven clientes directamente a tu WhatsApp, Facebook e Instagram.",
      "Creación de contenido publicitario con IA listo para publicar.",
      "Lanzamiento de campañas en TikTok Ads para llegar a más clientes.",
      "Análisis e interpretación de métricas, costo por lead y retorno de inversión.",
    ],
    price: 250,
    duoPrice: 220,
    corporatePrice: 200,
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
    duoPrice: 120,
    corporatePrice: 100,
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
    title: "Configurarás campañas publicitarias en Facebook, Instagram y TikTok",
    image: "/images/courses/aprendizaje-campanas-laptop.webp",
    imageAlt: "Laptop con un administrador de campañas publicitarias y métricas de rendimiento",
  },
  {
    title: "Generación de diseños publicitarios con INTELIGENCIA ARTIFICIAL",
    image: "/images/courses/aprendizaje-disenos-ia-laptop.webp",
    imageAlt: "Laptop con herramientas de inteligencia artificial para diseñar anuncios publicitarios",
  },
  {
    title: "Generación de videos con INTELIGENCIA ARTIFICIAL",
    image: "/images/courses/aprendizaje-videos-ia-laptop.webp",
    imageAlt: "Laptop con un editor de videos publicitarios con inteligencia artificial",
  },
] as const;

export const socialAdsVideos = [
  { id: "huNK0f5HmEk", label: "Experiencia de alumnos · 01" },
  { id: "wCz2WREGMos", label: "Experiencia de alumnos · 02" },
  { id: "hoLEsA_7RiM", label: "Experiencia de alumnos · 03" },
  { id: "j7LlqbFJJhI", label: "Experiencia de alumnos · 04" },
] as const;
