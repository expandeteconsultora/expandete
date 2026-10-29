# Expándete Más

Portada basada en la referencia visual proporcionada. Next.js 16 (App Router), React, TypeScript y Tailwind CSS 4.

## Desarrollo

Ejecutar `npm install` y `npm run dev`. Abrir http://localhost:3000.

Verificaciones: `npm run lint` y `npm run build`.

La configuración utiliza el modo `workerThreads` de Turbopack para procesar Tailwind sin puertos TCP internos. Verificado con Node.js 22.

## Meta Pixel y API de conversiones

El píxel `640429655689051` y la API comparten `event_id` / `eventID` para deduplicar cada evento. Cubren toda la web, incluida `/cursos-de-marketing-digital`:

- `PageView`: entrada y navegación entre páginas o cambios de parámetros de URL.
- `Contact`: activación de enlaces de WhatsApp, incluidas las tarjetas de cursos. Mide la apertura del contacto, no un mensaje enviado ni una venta.
- `Lead`: formulario válido de Afina completado para continuar en WhatsApp. Reenviarlo sin cambiar sus datos no genera otro Lead.

Configurar estas variables privadas en `.env.local` y, al desplegar, en las variables del servidor del alojamiento:

```dotenv
META_CONVERSIONS_ACCESS_TOKEN=
META_CONVERSIONS_TEST_EVENT_CODE=
```

El token se obtiene en la configuración del píxel en el Administrador de eventos. No usar el prefijo `NEXT_PUBLIC_`. El código de «Probar eventos» permite revisar los eventos del servidor en Meta; dejarlo vacío en producción. En desarrollo y localhost no se envían eventos del servidor sin ese código. Reiniciar el servidor después de modificar `.env.local`.

`POST /api/meta/events` valida origen, tamaño y los tres nombres de evento admitidos. El servidor envía a Graph API v26.0 la URL sin consultas ni fragmentos, fecha, agente del navegador, IP reenviada válida y cookies `_fbp` / `_fbc` disponibles. Cuando hay un `fbclid` real y aún no existe `_fbc`, genera el identificador de clic correspondiente. No transmite los valores del formulario ni el mensaje de WhatsApp. El token permanece en el servidor y los errores no exponen la respuesta sin filtrar de Meta. Los fallos transitorios tienen un reintento con el mismo identificador.

Ejecutar `npm run test:analytics`, `npm run lint` y `npm run build`. Las pruebas automatizadas simulan Meta y no envían eventos reales. Para comprobar la recepción, configurar el código de prueba, visitar la web y revisar «Probar eventos» en el píxel correspondiente. El servicio debe ejecutarse con Next.js en un servidor; una exportación de HTML estático no ejecuta la API.

## Estructura

- `app/(site)/page.tsx`: composición de la portada; la URL sigue siendo `/`.
- `app/layout.tsx`: idioma, tipografía, metadatos y acceso al contenido.
- `app/(site)/layout.tsx`: cabecera y pie compartidos del sitio principal.
- `app/(site)/impulsa-tu-negocio/page.tsx`: composición de la página de soluciones digitales; reutiliza el layout de la portada.
- `app/cursos-de-marketing-digital/page.tsx`: landing independiente de cursos.
- `app/globals.css`: Tailwind, colores y estilos compartidos.
- `components/home/`: hero, soluciones, Club y llamada a la acción.
- `components/layout/`: cabecera responsive y pie de página.
- `components/ui/`: marca, iconos y ventanas de vista previa.
- `data/navigation.ts`: elementos del menú.
- `data/services.ts`: contenido de las tres soluciones.
- `components/business-growth/`: presentación, servicios, sistema de canales digitales, proceso de trabajo, desarrollo comercial y contacto de Impulsa tu negocio.
- `data/business-growth.ts`: textos, fotografías, etapas, áreas comerciales y configuración de WhatsApp de Impulsa tu negocio.
- `components/courses/`: tarjetas, cinta continua y carrusel de fotos de la landing.
- `data/marketing-courses.ts`: cursos, mensajes y número de WhatsApp, herramientas y fotos.
- `public/images/`: fotografías de prueba generadas, optimizadas en WebP.

## Próximas páginas

Actualmente el menú navega por las secciones de la portada. Impulsa tu negocio tiene su propia página, enlazada desde la tarjeta de la portada y el pie compartido. Los demás servicios y el Club tienen ventanas de vista previa; Recursos y los textos legales muestran su estado pendiente. No se simulan registros, pagos ni formularios.

Al recibir las otras vistas, crear sus rutas en `app/`, actualizar `data/navigation.ts` y sustituir los botones de vista previa por enlaces. La cabecera, el pie y los componentes comunes ya están separados para reutilizarlos.

Las fotografías son demostrativas y se sirven localmente. Para reemplazarlas, conservar los nombres en `public/images/` o actualizar los componentes y `data/services.ts`.

## Impulsa tu negocio

Ruta: `/impulsa-tu-negocio`.

Editar `data/business-growth.ts` para actualizar la presentación, los cuatro servicios, las cuatro etapas del Sistema Expándete+, los cuatro pasos de trabajo, las tres áreas comerciales y el número o mensajes de WhatsApp. Los enlaces preparan la consulta y se abren en otra pestaña; no envían mensajes automáticamente.

La página reutiliza las fotografías WebP, la tipografía, los colores y los contenedores de la portada (`page-container` para el contenido y `section-container` para las tarjetas). Sus estilos están aislados en `components/business-growth/business-growth.module.css` y usan las variables de marca de `app/globals.css`. Las tarjetas pasan de cuatro columnas a dos en tablet y a una en móvil; las demás cuadrículas se adaptan según su contenido. La cabecera y el pie se heredan sin cambios de `app/(site)/layout.tsx`.

`connected-channels.tsx` contiene la ilustración decorativa de publicidad, web y WhatsApp, construida en HTML/CSS. Los textos de las pantallas son ilustrativos; los botones reales de contacto están fuera de la ilustración.

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
