// Contenido de /impulsa-tu-negocio. Edita aquí textos, recursos y contacto.
export const businessContact = {
  number: "51954989320",
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

export const businessServices = [
  {
    id: "publicidad-digital",
    title: "Publicidad digital",
    description: "Campañas en Facebook, Instagram y Google para atraer clientes.",
    image: "/images/team.webp",
    imageAlt: "Equipo preparando la estrategia de publicidad de una empresa",
    icon: "megaphone",
    message: "Hola, quiero conocer el servicio de publicidad digital para atraer más clientes a mi empresa.",
  },
  {
    id: "produccion-audiovisual",
    title: "Producción audiovisual",
    description: "Videos y fotografías profesionales que destacan tu marca y productos.",
    image: "/images/marketing.webp",
    imageAlt: "Profesional preparando una cámara para producir contenido audiovisual",
    icon: "video",
    message: "Hola, me interesa la producción audiovisual para destacar la marca y los productos de mi empresa.",
  },
  {
    id: "paginas-web-y-tiendas",
    title: "Páginas web y tiendas digitales",
    description: "Sitios web que presentan tu oferta y facilitan las ventas.",
    image: "/images/club.webp",
    imageAlt: "Sitio web de Expándete Más en una laptop",
    icon: "monitor",
    message: "Hola, quiero conocer sus soluciones de páginas web y tiendas digitales para mi empresa.",
  },
  {
    id: "automatizacion-whatsapp",
    title: "Automatización de WhatsApp",
    description: "Soluciones para mejorar la atención, automatizar respuestas y dar seguimiento.",
    image: "/images/hero.webp",
    imageAlt: "Emprendedor gestionando las herramientas digitales de su empresa",
    icon: "whatsapp",
    message: "Hola, quiero información sobre automatización de WhatsApp y seguimiento de consultas para mi empresa.",
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
