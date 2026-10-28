// Recursos independientes para sustituir las fotografías provisionales de Afina.
export const afinaImages = {
  hero: "/images/afina/hero.webp",
  accompaniment: "/images/afina/acompanamiento.webp",
};

export const afinaPrograms = [
  {
    id: "ventas",
    title: "De la consulta al cierre",
    description: "Mejora cómo tu equipo convierte oportunidades en ventas.",
    category: "Ventas y negociación",
    benefit: "100% práctico",
    image: "/images/afina/ventas.webp",
    imageAlt: "Profesionales trabajando juntos en una reunión de equipo",
  },
  {
    id: "experiencia",
    title: "Construyendo experiencias memorables",
    description: "Diseña mejores experiencias en cada etapa del cliente.",
    category: "Servicio y fidelización",
    benefit: "Experiencia CX",
    image: "/images/afina/experiencia.webp",
    imageAlt: "Participantes desarrollando un ejercicio práctico de capacitación",
  },
  {
    id: "comunicacion",
    title: "De la comunicación a la acción",
    description: "Logra equipos que se coordinan y cumplen acuerdos.",
    category: "Gestión de equipos",
    benefit: "Sinergia",
    image: "/images/afina/comunicacion.webp",
    imageAlt: "Equipo compartiendo ideas y coordinando su trabajo",
  },
  {
    id: "liderazgo",
    title: "El ADN de un gran equipo",
    description: "Desarrolla líderes y hábitos que fortalecen la cultura.",
    category: "Liderazgo y cultura",
    benefit: "Alto impacto",
    image: "/images/afina/liderazgo.webp",
    imageAlt: "Facilitador guiando una sesión de formación para profesionales",
  },
] as const;

export const afinaSteps = [
  { title: "Evaluamos", description: "Identificamos las habilidades prioritarias de tu equipo.", outcome: "Diagnóstico inicial" },
  { title: "Formamos", description: "Sesiones prácticas adaptadas a tu equipo y sus retos.", outcome: "Capacitación activa" },
  { title: "Acompañamos", description: "Reforzamos la aplicación de lo aprendido en el trabajo.", outcome: "Aplicación en contexto" },
  { title: "Medimos", description: "Revisamos los avances y definimos los próximos pasos.", outcome: "Impacto y resultados" },
] as const;

export const afinaProposal = [
  { icon: "compass", title: "Diagnóstico de necesidades sin costo", description: "Para identificar las brechas de tu equipo." },
  { icon: "presentation", title: "Talleres prácticos in-company", description: "Adaptados a los retos reales de tu organización." },
  { icon: "toolkit", title: "Herramientas de aplicación y medición", description: "Material de trabajo y seguimiento de los avances." },
  { icon: "team", title: "Sesiones de seguimiento y validación", description: "Consolidamos los hábitos después de la capacitación." },
] as const;

// Mismo contacto comercial que el resto de las páginas del sitio.
export function afinaWhatsAppUrl(message = "Hola, quiero información sobre Afina y sus programas de capacitación para mi equipo.") {
  return `https://wa.me/51954989320?text=${encodeURIComponent(message)}`;
}
