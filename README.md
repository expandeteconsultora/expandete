# Expándete Más

Portada basada en la referencia visual proporcionada. Next.js 16 (App Router), React, TypeScript y Tailwind CSS 4.

## Desarrollo

Ejecutar `npm install` y `npm run dev`. Abrir http://localhost:3000.

Verificaciones: `npm run lint` y `npm run build`.

La configuración utiliza el modo `workerThreads` de Turbopack para procesar Tailwind sin puertos TCP internos. Verificado con Node.js 22.

## Estructura

- `app/(site)/page.tsx`: composición de la portada; la URL sigue siendo `/`.
- `app/layout.tsx`: idioma, tipografía, metadatos y acceso al contenido.
- `app/(site)/layout.tsx`: cabecera y pie compartidos del sitio principal.
- `app/cursos-de-marketing-digital/page.tsx`: landing independiente de cursos.
- `app/globals.css`: Tailwind, colores y estilos compartidos.
- `components/home/`: hero, soluciones, Club y llamada a la acción.
- `components/layout/`: cabecera responsive y pie de página.
- `components/ui/`: marca, iconos y ventanas de vista previa.
- `data/navigation.ts`: elementos del menú.
- `data/services.ts`: contenido de las tres soluciones.
- `components/courses/`: tarjetas, cinta continua y carrusel de fotos de la landing.
- `data/marketing-courses.ts`: cursos, mensajes y número de WhatsApp, herramientas y fotos.
- `public/images/`: fotografías de prueba generadas, optimizadas en WebP.

## Próximas páginas

Actualmente el menú navega por las secciones de la portada. Los servicios y el Club tienen ventanas de vista previa; Recursos y los textos legales muestran su estado pendiente. No se simulan registros, pagos ni formularios.

Al recibir las otras vistas, crear sus rutas en `app/`, actualizar `data/navigation.ts` y sustituir los botones de vista previa por enlaces. La cabecera, el pie y los componentes comunes ya están separados para reutilizarlos.

Las fotografías son demostrativas y se sirven localmente. Para reemplazarlas, conservar los nombres en `public/images/` o actualizar los componentes y `data/services.ts`.

## Landing de cursos

Ruta: `/cursos-de-marketing-digital`.

Para cambiar WhatsApp, editar únicamente **`data/marketing-courses.ts`**:

- `whatsappNumber`: número internacional, actualmente `51954989320`.
- `whatsappMessage`: texto independiente de cada curso. Se admiten acentos, emojis y saltos de línea; la URL los codifica automáticamente.

Cada tarjeta completa es un enlace a WhatsApp que se abre en otra pestaña. Abrir el enlace prepara el mensaje; no lo envía automáticamente.

La cinta de herramientas se mueve continuamente de izquierda a derecha, sin cortes. Sus flechas permiten adelantarla o retrocederla y tiene un control de pausa.

El carrusel muestra una, dos o tres fotografías según el ancho de pantalla. Incluye flechas, cuatro puntos, navegación con las teclas izquierda/derecha y gestos táctiles. Avanza cada 4,5 segundos; se pausa mientras el cursor está encima, al navegar con el teclado, al ocultar la pestaña o mediante su control de pausa. Después de una interacción manual, el temporizador comienza de nuevo. Con movimiento reducido, se desactivan las animaciones automáticas.

Los estilos específicos viven en `components/courses/courses.module.css`. La regla de Tailwind en `next.config.ts` excluye los archivos `.module.css` para conservar su aislamiento.

Las ilustraciones y fotografías en `public/images/courses/` son de prueba, generadas y optimizadas en WebP. Los iconos de ChatGPT, Canva, Meta, TikTok y WhatsApp proceden de [Simple Icons](https://github.com/simple-icons/simple-icons) (CC0); los demás son vectores locales. Las marcas pertenecen a sus respectivos titulares.
