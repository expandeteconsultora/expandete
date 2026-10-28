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
    message: "Hola, me interesa la solución de dirección y gestión organizacional de Sincroniza. Quiero definir objetivos, responsabilidades e indicadores para mi empresa.",
  },
  {
    id: "procesos",
    title: "Gestión y mejora de procesos",
    description: "Organizamos procesos clave, definimos métodos de trabajo y establecemos mecanismos de control.",
    tools: "Estandarización · Mejora continua",
    icon: "settings",
    image: "/images/sincroniza/procesos.webp",
    imageAlt: "Facilitador explicando una metodología de trabajo y sus pasos a un equipo",
    message: "Hola, quiero conocer la solución de gestión y mejora de procesos de Sincroniza para organizar el trabajo y fortalecer el control en mi empresa.",
  },
  {
    id: "liderazgo",
    title: "Liderazgo y autonomía organizacional",
    description: "Fortalecemos la delegación, coordinación y responsabilidad para desarrollar equipos más autónomos.",
    tools: "Liderazgo · Cultura · Autonomía",
    icon: "people",
    image: "/images/sincroniza/liderazgo.webp",
    imageAlt: "Profesionales compartiendo ideas y coordinando el trabajo de su equipo",
    message: "Hola, me interesa la solución de liderazgo y autonomía organizacional de Sincroniza para mejorar la delegación y la coordinación de mi equipo.",
  },
] as const;

export const sincronizaTools = [
  { title: "Objetivos e indicadores", description: "Metas claras para cada área.", icon: "target" },
  { title: "Procesos estandarizados", description: "Métodos de trabajo definidos.", icon: "workflow" },
  { title: "Roles y responsabilidades", description: "Mayor claridad para delegar.", icon: "people" },
  { title: "Seguimiento de gestión", description: "Revisión de avances y resultados.", icon: "chart" },
] as const;

export const sincronizaContactBenefits = ["Consulta sin costo", "Asesoría personalizada", "Sin compromiso"];
