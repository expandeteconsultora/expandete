export const navigation = [
  { label: "Descubre", href: "/#descubre" },
  { label: "Servicios", href: "/#servicios" },
  {
    label: "Cursos",
    children: [
      { label: "Publicidad en redes sociales", href: "/cursos/publicidad-en-redes-sociales" },
    ],
  },
  { label: "Club Expándete Más", href: "/#club" },
] as const;
