// Contenido de /impulsa-tu-negocio. Edita aquí textos, recursos y contacto.
export const businessContact = {
  number: "51954989320",
  schedulingUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ07Oio0j8TWEfMbt8qGcmHXNacPhhBwvDidcv_sh_JBIoeBMuVGt400Nvg34yzelNMF18LuxTo2?gv=true",
  message: "Hola, quiero impulsar mi empresa. Me gustaría conversar con un asesor sobre sus soluciones.",
  systemMessage: "Hola, quiero conocer el Sistema Expándete+ para conectar los canales digitales de mi empresa.",
  commercialMessage: "Hola, me interesa el desarrollo comercial integral para fortalecer el crecimiento de mi empresa.",
};

export const businessHero = {
  eyebrow: "Impulsa tu empresa",
  title: "Haz que más personas conozcan tu empresa y",
  highlight: "se conviertan en clientes.",
  description: "Integramos marketing, ventas y tecnología para fortalecer el crecimiento de tu empresa.",
  image: "/images/hero.webp",
  imageAlt: "Emprendedor trabajando con su laptop para hacer crecer su empresa",
  benefits: [
    { label: "Soluciones prácticas", icon: "chart" },
    { label: "Acompañamiento real", icon: "people" },
    { label: "Resultados medibles", icon: "settings" },
  ],
} as const;

// Reemplaza youtubeUrl y thumbnail por el video y la miniatura de cada empresa.
// Edita service con el servicio que utilizó cada empresa.
// Los videos actuales son demos de YouTube, no testimonios reales.
// Al cargar el testimonio definitivo, cambia isDemo a false.
export const businessTestimonials = {
  title: "Empresas que confían en nosotros",
  subtitle: "Conoce sus resultados.",
  items: [
    {
      id: "tasty-chicken",
      company: "Tasty Chicken",
      service: "Marketing digital",
      youtubeUrl: "https://youtube.com/shorts/7BvqGHUYq5c?feature=share",
      thumbnail: "/images/projects/tasty-chicken.webp",
      thumbnailAlt: "Imagen provisional de un negocio de alimentos",
      isDemo: false,
    },
    {
      id: "america-tour",
      company: "America Tour",
      service: "Marketing digital",
      youtubeUrl: "https://youtube.com/shorts/ibwIGI2Y9mY",
      thumbnail: "/images/projects/america-tour.webp",
      thumbnailAlt: "Imagen provisional de visitantes en una catarata de San Martín",
      isDemo: false,
    },
  ],
} as const;

export const businessServices = [
  {
    id: "publicidad-digital",
    title: "Publicidad digital",
    description: "Campañas en redes sociales y Google para atraer clientes.",
    image: "/images/courses/course-meta-ads-tarapoto.webp",
    imageAlt: "Equipo preparando la estrategia de publicidad de una empresa",
    icon: "megaphone",
    message: "Interesado en publicidad digital.",
  },
  {
    id: "produccion-audiovisual",
    title: "Producción audiovisual",
    description: "Videos y fotografías profesionales que destacan tu marca y productos.",
    image: "/images/impulsa/produccion-audiovisual.webp",
    imageAlt: "Profesional preparando una cámara para producir contenido audiovisual",
    icon: "video",
    message: "Interesado en producción audiovisual.",
  },
  {
    id: "paginas-web-y-tiendas",
    title: "Páginas web y tiendas digitales",
    description: "Sitios web que presentan tu oferta y facilitan las ventas.",
    image: "/images/club.webp",
    imageAlt: "Sitio web de Expándete Más en una laptop",
    icon: "monitor",
    message: "Interesado en páginas web y tiendas digitales.",
  },
  {
    id: "automatizacion-whatsapp",
    title: "Automatización de WhatsApp",
    description: "Soluciones para mejorar la atención, automatizar respuestas y dar seguimiento.",
    image: "/images/hero.webp",
    imageAlt: "Emprendedor gestionando las herramientas digitales de su empresa",
    icon: "whatsapp",
    message: "Interesado en automatización de WhatsApp.",
  },
] as const;

export const businessSystem = {
  eyebrow: "Sistema Expándete+",
  title: "Tus canales digitales,",
  highlight: "trabajando juntos.",
  description: "Conectamos publicidad, contenido, web y WhatsApp para que más personas te encuentren, confíen en tu negocio y se conviertan en clientes.",
  measurement: "Medimos y mejoramos cada etapa",
  stages: [
    { title: "Atraer", subtitle: "Publicidad digital y contenido", description: "Las personas descubren tu negocio en Facebook, Instagram y Google.", icon: "megaphone" },
    { title: "Convertir", subtitle: "Web y WhatsApp", description: "Visitan tu página web o escriben por WhatsApp para conocer más.", icon: "cursor" },
    { title: "Fidelizar", subtitle: "Seguimiento y comunicación", description: "Brindamos una atención ágil y damos seguimiento a cada oportunidad.", icon: "people" },
    { title: "Optimizar", subtitle: "Medición y mejora continua", description: "Analizamos resultados y optimizamos las campañas y procesos.", icon: "chart" },
  ],
} as const;

export const businessSteps = [
  { title: "Analizamos", description: "Conocemos tu negocio y tus objetivos.", icon: "document" },
  { title: "Diseñamos", description: "Creamos una estrategia a tu medida.", icon: "bulb" },
  { title: "Implementamos", description: "Ejecutamos las soluciones y te acompañamos.", icon: "settings" },
  { title: "Mejoramos", description: "Medimos resultados y optimizamos continuamente.", icon: "chart" },
] as const;

export const businessCommercial = {
  eyebrow: "Desarrollo comercial integral",
  title: "Una gestión comercial más sólida para hacer",
  highlight: "crecer tu empresa.",
  description: "Integramos estrategia, marketing, ventas, procesos, equipos y tecnología en un plan de trabajo práctico y medible.",
  image: "/images/training.webp",
  imageAlt: "Asesor presentando una estrategia de crecimiento a un equipo de trabajo",
  benefits: [
    { label: "Más clientes", icon: "people" },
    { label: "Más ventas", icon: "chart" },
    { label: "Procesos claros", icon: "settings" },
    { label: "Equipo capacitado", icon: "people" },
  ],
  areas: [
    { title: "Estrategia y marketing", icon: "target", features: ["Diagnóstico comercial", "Plan de marketing y comunicación", "Plan de fidelización de clientes", "Diseño del embudo comercial"] },
    { title: "Procesos y ventas", icon: "settings", features: ["Modelo comercial", "Procesos de venta y CRM", "Acompañamiento en la implementación", "Indicadores de gestión"] },
    { title: "Equipos y tecnología", icon: "people", features: ["Formación comercial", "Gestión de equipos", "Herramientas y control de resultados", "Acompañamiento y soporte tecnológico"] },
  ],
} as const;
