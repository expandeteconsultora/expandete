# Imágenes de Afina

Las seis fotografías de `/afina` son provisionales, reutilizadas del proyecto. Se intentó generar imágenes nuevas con la herramienta integrada `imagegen`, pero el servicio respondió que se alcanzó el límite de uso. No se utilizó la alternativa de pago por API.

Para reemplazarlas, guarda los nuevos archivos WebP con los mismos nombres dentro de `public/images/afina/`. Las rutas se definen en `data/afina.ts`. Recomendación: fotografías horizontales de al menos 1200 px de ancho, con los sujetos centrados para permitir el recorte responsivo.

| Archivo | Recurso provisional de origen | Escena propuesta para la imagen definitiva |
| --- | --- | --- |
| `hero.webp` | `public/images/training.webp` | Facilitadora con blazer azul guiando a cinco profesionales latinoamericanos alrededor de una mesa, pizarra con notas adhesivas, oficina luminosa. |
| `ventas.webp` | `public/images/team.webp` | Cuatro profesionales practicando una consulta de ventas e intercambiando una propuesta en una sala de reuniones. |
| `experiencia.webp` | `public/images/courses/class-01.webp` | Facilitadora y cuatro participantes construyendo un mapa de experiencia del cliente con notas adhesivas. |
| `comunicacion.webp` | `public/images/team.webp` | Cuatro colegas escuchándose y coordinando un ejercicio de planificación con cuadernos y hojas de trabajo. |
| `liderazgo.webp` | `public/images/training.webp` | Facilitador impartiendo un taller de liderazgo y cultura de equipo a participantes agrupados en mesas. |
| `acompanamiento.webp` | `public/images/courses/class-03.webp` | Dos facilitadores acompañando un taller práctico, con pizarra de notas adhesivas y participantes trabajando alrededor de mesas. |

## Prompts utilizados en el intento de generación

Cada escena se envió por separado con esta dirección común: fotografía editorial empresarial realista, profesionales latinoamericanos, luz natural, interiores cálidos y neutros, detalles azul marino y verde suave, composición horizontal 3:2 con sujetos centrados para recorte 16:9. Una única fotografía sin collage, logotipos, marcas de agua ni texto legible. Las escenas específicas corresponden a la tabla anterior.
