# Verificación de la Formativa 1

Fecha: 26/10/2026. Proyecto: La Huerta / FrontEnd2.

## Comprobaciones realizadas

- `npm run build`: compilación de producción correcta en `build/`.
- `npm start`: compilación de desarrollo correcta.
- Menú inferior: navegación comprobada entre `/`, `/quienes-somos` y `/contacto`.
- Enlaces de contenido hacia presentación y contacto: destinos revisados.
- Inventario: ocho filas de productos, más la cabecera. El yogur con stock cero muestra «Sin stock»; los productos con existencias muestran «Disponible».
- Página Quiénes somos: presentación, misión, visión y valores desarrollados.
- Página Contáctanos: datos, horarios y formulario. El carácter ficticio del proyecto está documentado en README.md.
- Recarga de la ruta `/contacto` en el servidor de desarrollo: correcta.
- Historial del navegador: Atrás y Adelante entre contacto e inicio, correctos.
- Revisión visual de escritorio y móvil con viewport de 390 × 844. En móvil, ancho de documento igual al ancho disponible, sin desbordamiento horizontal de toda la página. La tabla tiene su propio desplazamiento horizontal.
- Se restableció el viewport después de la revisión.

Se comprobó la compilación de producción por separado; el recorrido interactivo se hizo en el servidor de desarrollo. No se agregaron pruebas automáticas a la actividad.

## Alcance

Se mantienen las tres páginas solicitadas y React Router siguiendo la guía. No se incorporaron login, backend, edición de inventario, filtros ni persistencia. El formulario demostrativo fue añadido posteriormente por petición expresa del estudiante.

Los datos de La Huerta son ficticios y se utilizan para el ejercicio académico.

La publicación de este código en GitHub no sustituye la entrega de la URL al docente por el canal de la asignatura.

## Formulario demostrativo solicitado por el estudiante

- Nombre obligatorio: de 2 a 80 caracteres, sin contar espacios al inicio y al final.
- Correo obligatorio: formato de correo con dominio y hasta 120 caracteres.
- Mensaje obligatorio: de 10 a 1.000 caracteres, sin contar espacios al inicio y al final.
- Comprobados en navegador: campos vacíos, solo espacios, correo inválido, nombre corto, mensaje de 9 y de 10 caracteres, datos válidos y botón Limpiar.
- Los errores se muestran junto al campo y el foco pasa al primer campo inválido.
- La confirmación desaparece al modificar el formulario.
- El botón muestra «Enviar». La confirmación de agradecimiento mantiene la indicación breve «Envío de demostración».
- Revisión visual en la ventana móvil abierta, sin desbordamiento horizontal del documento.
- npm run build: compilación correcta tras incorporar el formulario.

## Textos abreviados

Por petición del estudiante se acortaron los textos visibles de Inicio, Quiénes somos y Contáctanos. Se retiraron explicaciones repetidas y avisos extensos; el formulario conserva sus validaciones y los errores necesarios. La validación, las tres rutas y las ocho filas de productos se comprobaron de nuevo. La compilación final pasó.

## Agradecimiento y ajuste visual

El estudiante pidió una confirmación con agradecimiento y un diseño algo más moderno. Se añadieron bordes suaves, botones sólidos, sombras discretas y una confirmación con «¡Gracias por escribirnos! Recibimos tu mensaje y te responderemos pronto», identificada como demostración. Comprobado: tres errores con campos vacíos, ausencia de éxito cuando hay errores y agradecimiento con datos válidos. Compilación de producción correcta.

## Favicon y preparación del repositorio

- Favicon SVG con monograma LH, fondo azul y esquinas redondeadas, enlazado desde public/index.html.
- Icono revisado visualmente en el navegador y vínculo al favicon comprobado en la página.
- Botón del formulario comprobado con el texto «Enviar».
- README abreviado con descripción, tecnologías, ejecución local y rutas.
- npm run build: compilación de producción correcta tras estos ajustes.
