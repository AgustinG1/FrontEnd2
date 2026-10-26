# Verificación de la Formativa 1

Fecha: 26/10/2026. Proyecto: La Huerta / FrontEnd2.

## Comprobaciones realizadas

- `npm run build`: compilación de producción correcta en `build/`.
- `npm start`: compilación de desarrollo correcta.
- Menú inferior: navegación comprobada entre `/`, `/quienes-somos` y `/contacto`.
- Enlaces de contenido hacia presentación y contacto: destinos revisados.
- Inventario: ocho filas de productos, más la cabecera. El yogur con stock cero muestra «Sin stock»; los productos con existencias muestran «Disponible».
- Página Quiénes somos: presentación, misión, visión y valores desarrollados.
- Página Contáctanos: datos y horarios de ejemplo, con aviso explícito de su carácter ficticio.
- Recarga de la ruta `/contacto` en el servidor de desarrollo: correcta.
- Historial del navegador: Atrás y Adelante entre contacto e inicio, correctos.
- Revisión visual de escritorio y móvil con viewport de 390 × 844. En móvil, ancho de documento igual al ancho disponible, sin desbordamiento horizontal de toda la página. La tabla tiene su propio desplazamiento horizontal.
- Se restableció el viewport después de la revisión.

Se comprobó la compilación de producción por separado; el recorrido interactivo se hizo en el servidor de desarrollo. No se agregaron pruebas automáticas a la actividad.

## Alcance

Se mantienen las tres páginas solicitadas y React Router siguiendo la guía. No se incorporaron login, backend, edición de inventario, filtros, persistencia ni formulario.

Los ejemplos de compañeros sirvieron como referencia para desarrollar información y presentar el inventario. Los datos de La Huerta son ficticios y están señalados como tales.

La publicación de este código en GitHub no sustituye la entrega de la URL al docente por el canal de la asignatura.
