# La Huerta — Supermercado

Proyecto de la Formativa 1 de **Desarrollo Frontend II (PFY2202)**. Sitio desarrollado con React para consultar el inventario de un supermercado.

## Características

- **Inicio:** inventario con productos, categorías, precios y existencias.
- **Quiénes somos:** presentación del supermercado, misión, visión y valores.
- **Contáctanos:** información de contacto y formulario con validaciones.
- **Navegación:** menú inferior con enlaces mediante React Router.
- **Diseño adaptable:** visualización en computadores y dispositivos móviles.

## Tecnologías utilizadas

- React
- React Router DOM
- Create React App
- JavaScript, HTML y CSS
- Git y GitHub

## Ejecutar el proyecto

Requiere tener instalados **Node.js** y **npm**.

```bash
git clone https://github.com/AgustinG1/FrontEnd2.git
cd FrontEnd2
npm install
npm start
```

Abrir `http://localhost:3000` en el navegador.

Para generar la versión de producción:

```bash
npm run build
```

## Rutas

| Ruta | Página |
| --- | --- |
| `/` | Inicio / Inventario |
| `/quienes-somos` | Quiénes somos |
| `/contacto` | Contáctanos |

## Alcance del proyecto

El inventario utiliza datos de ejemplo definidos en el frontend. El formulario valida nombre, correo electrónico y mensaje, y muestra una confirmación de envío simulada.

## Estado

Formativa 1: sitio con tres páginas y navegación mediante React Router.
