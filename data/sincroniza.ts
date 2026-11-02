// Contenido y fotografías reemplazables de /sincroniza.
export const sincronizaContact = {
  number: "51954989320",
  message: "Hola, quiero conocer Sincroniza y conversar con un asesor sobre la gestión de mi empresa.",
};

export function sincronizaContactUrl(message = sincronizaContact.message) {
  return `https://wa.me/${sincronizaContact.number}?text=${encodeURIComponent(message)}`;
}

export const sincronizaImages = {
  hero: "/images/sincroniza/hero.webp",
  contact: "/images/sincroniza/asesoria.webp",
};

// Testimonios exclusivos de Sincroniza. Completa los datos del cliente y su video.
// Al reemplazar el enlace de prueba, cambia isDemo a false.
// Para añadir otro testimonio, agrega un objeto más a items.
export const sincronizaTestimonials = {
  title: "Empresas que confían en nosotros",
  subtitle: "Conoce sus resultados.",
  items: [
    {
      id: "sincroniza-cliente-01",
      company: "Vet House",
      service: "Gestion y mejora de procesos",
      youtubeUrl: "https://youtube.com/shorts/67yjdRh-oVs",
      thumbnail: "/images/sincroniza/vet-house.webp",
      thumbnailAlt: "Imagen provisional de un equipo definiendo sus objetivos de trabajo",
      isDemo: true,
    },
  ],
} as const;

export const sincronizaBenefits = [
  { icon: "chart", label: "Implementación práctica" },
  { icon: "people", label: "Acompañamiento real" },
  { icon: "settings", label: "Resultados medibles" },
] as const;

export const sincronizaSolutions = [
  {
    id: "direccion",
    title: "Dirección y gestión organizacional",
    description: "Implementamos objetivos, responsabilidades e indicadores para mejorar la dirección y la toma de decisiones.",
    tools: "BSC · OKR · KPI",
    icon: "target",
    image: "/images/sincroniza/direccion.webp",
    imageAlt: "Asesor trabajando con un equipo para definir objetivos y responsabilidades",
    message: "Interesado en dirección y gestión organizacional",
  },
  {
    id: "procesos",
    title: "Gestión y mejora de procesos",
    description: "Organizamos procesos clave, definimos métodos de trabajo y establecemos mecanismos de control.",
    tools: "Estandarización · Mejora continua",
    icon: "settings",
    image: "/images/sincroniza/procesos.webp",
    imageAlt: "Facilitador explicando una metodología de trabajo y sus pasos a un equipo",
    message: "Interesado en gestión y mejora de procesos",
  },
  {
    id: "liderazgo",
    title: "Liderazgo y autonomía organizacional",
    description: "Fortalecemos la delegación, coordinación y responsabilidad para desarrollar equipos más autónomos.",
    tools: "Liderazgo · Cultura · Autonomía",
    icon: "people",
    image: "/images/sincroniza/liderazgo.webp",
    imageAlt: "Profesionales compartiendo ideas y coordinando el trabajo de su equipo",
    message: "Interesado en liderazgo y autonomía organizacional",
  },
] as const;

export const sincronizaTools = [
  { title: "Objetivos e indicadores", description: "Metas claras para cada área.", icon: "target" },
  { title: "Procesos estandarizados", description: "Métodos de trabajo definidos.", icon: "workflow" },
  { title: "Roles y responsabilidades", description: "Mayor claridad para delegar.", icon: "people" },
  { title: "Seguimiento de gestión", description: "Revisión de avances y resultados.", icon: "chart" },
] as const;

export const sincronizaContactBenefits = ["Consulta sin costo", "Asesoría personalizada", "Sin compromiso"];
