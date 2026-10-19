# Expándete Más

Portada basada en la referencia visual proporcionada. Next.js 16 (App Router), React, TypeScript y Tailwind CSS 4.

## Desarrollo

Ejecutar `npm install` y `npm run dev`. Abrir http://localhost:3000.

Verificaciones: `npm run lint` y `npm run build`.

La configuración utiliza el modo `workerThreads` de Turbopack para procesar Tailwind sin puertos TCP internos. Verificado con Node.js 22.

## Estructura

- `app/page.tsx`: composición de la portada.
- `app/layout.tsx`: idioma, metadatos, cabecera y pie compartidos.
- `app/globals.css`: Tailwind, colores y estilos compartidos.
- `components/home/`: hero, soluciones, Club y llamada a la acción.
- `components/layout/`: cabecera responsive y pie de página.
- `components/ui/`: marca, iconos y ventanas de vista previa.
- `data/navigation.ts`: elementos del menú.
- `data/services.ts`: contenido de las tres soluciones.
- `public/images/`: fotografías de prueba generadas, optimizadas en WebP.

## Próximas páginas

Actualmente el menú navega por las secciones de la portada. Los servicios y el Club tienen ventanas de vista previa; Recursos y los textos legales muestran su estado pendiente. No se simulan registros, pagos ni formularios.

Al recibir las otras vistas, crear sus rutas en `app/`, actualizar `data/navigation.ts` y sustituir los botones de vista previa por enlaces. La cabecera, el pie y los componentes comunes ya están separados para reutilizarlos.

Las fotografías son demostrativas y se sirven localmente. Para reemplazarlas, conservar los nombres en `public/images/` o actualizar los componentes y `data/services.ts`.
