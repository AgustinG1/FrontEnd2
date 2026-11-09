# La Huerta — Gestión de inventario

Proyecto de la **Sumativa 1, semana 3**, de Desarrollo Frontend II (**PFY2202**). Continúa el supermercado de las actividades anteriores e incorpora filtro por categoría, detalle de artículos y carrito con actualización del inventario.

- [Sitio publicado en GitHub Pages](https://agusting1.github.io/FrontEnd2/)
- [Repositorio](https://github.com/AgustinG1/FrontEnd2)

## Ejecutar el proyecto

Requiere **Node.js 22** y npm.

Si descargaste el ZIP, descomprímelo y abre una terminal en la carpeta `FrontEnd2`, donde está `package.json`. Si utilizas Git:

```bash
git clone https://github.com/AgustinG1/FrontEnd2.git
cd FrontEnd2
```

Instala las dependencias y ejecuta la aplicación:

```bash
npm ci
npm start
```

Abre [http://localhost:3000](http://localhost:3000).

Para generar la versión de producción:

```bash
npm run build
```

El resultado queda en `build/`. Las dependencias se reconstruyen con `npm ci`; `node_modules/` y `build/` no se incluyen en la entrega del código fuente.

## Funcionalidades

- **Agregar artículo:** formulario con nombre, marca, categoría, presentación, precio y stock. Valida campos obligatorios y valores numéricos enteros no negativos. El artículo aparece inmediatamente en el inventario.
- **Inventario:** tabla con los datos de todos los artículos, filtro por categoría y botón para agregar directamente al carrito. Confirma la cantidad agregada y permite abrir el carrito. El filtro modifica la lista visible y conserva los datos originales.
- **Detalle:** el nombre del artículo abre una ruta dinámica con sus datos. Cada clic en Agregar al carrito descuenta una unidad del stock disponible.
- **Carrito:** muestra los artículos seleccionados y permite aumentar o disminuir cantidades. Aumentar descuenta stock; disminuir lo devuelve. Al llegar a cero, la línea sale del carrito. No se puede superar el stock disponible.
- **Páginas informativas:** Inicio, Quiénes somos y Contáctanos, con menú inferior y navegación mediante React Router.
- **Diseño adaptable:** Tailwind CSS, tema de colores propio, estilos compartidos y tablas con desplazamiento horizontal en pantallas pequeñas.

## Rutas

| Ruta | Pantalla |
| --- | --- |
| `/` | Inicio y resumen del inventario |
| `/inventario` | Listado y filtro por categoría |
| `/inventario/agregar` | Formulario de ingreso de artículos |
| `/inventario/:productoId` | Detalle del artículo |
| `/carrito` | Carrito y modificación de cantidades |
| `/quienes-somos` | Información del supermercado |
| `/contacto` | Información de contacto y formulario demostrativo |
| Cualquier otra | Página no encontrada |

## Organización y estado

La aplicación utiliza React, Create React App, React Router DOM 6 y Tailwind CSS 3.

- `src/routes/AppRoutes.js`: rutas anidadas y parámetros del detalle.
- `src/components/MainLayout.js`: encabezado, contenido compartido y menú inferior.
- `src/hooks/useInventario.js`: estado compartido del inventario y del carrito. Actualiza ambos juntos y de forma inmutable.
- `src/pages/`: pantallas de la aplicación. La tabla de `Inventory` también se reutiliza en Inicio.
- `src/data/productos.js`: inventario inicial de ejemplo.
- `src/App.css` y `tailwind.config.js`: estilos reutilizables, tema y adaptación a distintos tamaños.

El filtro tiene estado local y calcula los artículos visibles sin reemplazar el inventario compartido. El estado se conserva al navegar entre pantallas. **Al recargar la página se restablece el inventario inicial y se vacía el carrito.**

Los datos del supermercado y de sus productos son ficticios. El formulario de contacto solo valida y muestra una confirmación demostrativa: no envía ni almacena mensajes. No hay backend ni persistencia.

## Validaciones

- Los artículos requieren nombre, marca, categoría y presentación; no se aceptan campos vacíos o con solo espacios.
- Precio y stock deben ser números enteros, iguales o mayores que cero y dentro del rango seguro de JavaScript.
- En contacto se valida el nombre (2 a 80 caracteres), el formato del correo (máximo 120 caracteres) y el mensaje (10 a 1.000 caracteres).

## Reglas del inventario y carrito

Agregar o aumentar una unidad en el carrito descuenta una del inventario. Disminuir la cantidad devuelve esa unidad; al llegar a cero, el artículo sale del carrito. No se permite superar el stock disponible ni dejar cantidades negativas. El filtro conserva el inventario original y los cambios se comparten entre pantallas.

## Despliegue

El sitio se publica en GitHub Pages mediante GitHub Actions al actualizar `main`. El flujo instala las dependencias, ejecuta `npm run build` y publica la carpeta `build/`. Se configura la ruta base `/FrontEnd2` y se genera `404.html` para permitir abrir y recargar las rutas de la aplicación.
