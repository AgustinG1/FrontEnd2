# FrontEnd2 — Supermercado La Huerta

Actividad Formativa 1 de **Desarrollo Frontend II (PFY2202)**: «Utilizando tecnologías avanzadas de React en sitios web».

Sitio construido con HTML, JavaScript, CSS y React. Incluye una página principal, un menú inferior y las páginas **Quiénes somos** y **Contáctanos**, conectadas mediante React Router.

## Ejecutar el proyecto

Requisitos: Node.js y npm.

```sh
git clone https://github.com/AgustinG1/FrontEnd2.git
cd FrontEnd2
npm install
npm start
```

El servidor de desarrollo abre el sitio en `http://localhost:3000`.

Para generar la versión de producción:

```sh
npm run build
```

La compilación se genera en `build/`. Esta carpeta y `node_modules/` no se incluyen en el repositorio.

## Páginas

| Ruta | Página | Contenido |
| --- | --- | --- |
| `/` | Inicio | Presentación del supermercado y tabla de ocho productos con código, categoría, presentación, precio, stock y disponibilidad |
| `/quienes-somos` | Quiénes somos | Presentación de La Huerta, misión, visión y valores |
| `/contacto` | Contáctanos | Dirección, teléfono, correo y horarios de ejemplo |

La Huerta es un supermercado ficticio. Todos los datos comerciales y del inventario se utilizan exclusivamente como contenido del ejercicio académico. El correo usa el dominio de ejemplo `.example`; no existe un canal de atención real.

## React Router

Se sigue la estructura del ejemplo de la guía de aprendizaje:

- `BrowserRouter`, con alias `Router`, envuelve la aplicación en `src/index.js`.
- `Routes` y `Route` relacionan cada dirección con el componente de su página.
- `Link` permite cambiar de vista sin recargar toda la página.
- `useLocation` permite destacar el enlace correspondiente a la ruta actual.
- El menú inferior está fuera de `Routes` y permanece disponible en las tres páginas.

El proyecto utiliza Create React App con `react-scripts` 5.0.1 y React Router DOM 6.30.1. BrowserRouter necesita que un futuro alojamiento web resuelva las rutas a `index.html`. La publicación del código en GitHub no implica que el sitio esté desplegado en GitHub Pages.

## Estructura

```text
public/
  index.html
src/
  index.js             Entrada de React y BrowserRouter
  App.js               Rutas, cabecera y menú inferior
  App.css              Estilos y adaptación a pantallas pequeñas
  data/productos.js    Datos de ejemplo del inventario
  pages/Home.js        Página principal
  pages/About.js       Quiénes somos
  pages/Contact.js     Contáctanos
```

## Relación con las instrucciones específicas

| Requisito | Implementación |
| --- | --- |
| Sitio de supermercado con HTML, JavaScript, CSS y React | Componentes React y CSS propio |
| Página principal | Inventario de ejemplo en Home.js |
| Menú inferior | Enlaces Link en App.js |
| Dos páginas de la lista indicada | Quiénes somos y Contáctanos |
| Implementar React Router | BrowserRouter, Routes, Route y Link |
| Disponibilizar el código en GitHub | Repositorio FrontEnd2 |

Las instrucciones proponen el nombre `supermercado-nombre-apellido-siglaCurso`. El estudiante eligió expresamente **FrontEnd2** para este repositorio.

No se incluyen edición del inventario, login, filtros, persistencia ni formularios. La tabla permite representar el inventario sin añadir esas funciones al alcance de la actividad.

## Referencias de la actividad

Se consultaron las instrucciones específicas, la pauta y la guía de la semana 1 del curso. Se usaron como ideas de organización los ejemplos que compartió el estudiante:

- [Diego Carvajal](https://github.com/dcarvajal99/supermercado-diego-carvajal-pfy2202).
- [Cristian Torres](https://github.com/CristianJTM/Exp1_S1_Cristian_Torres_DESARROLLO-FRONTEND-II_004A).
- [Johan Romanque](https://github.com/Johanromanque/supermercado-react).
- [Sebastián Tapia](https://github.com/SebastianTapia1104/Desarrollo-Frontend-II).

El texto de La Huerta y la implementación de sus componentes son propios de este ejercicio; no se copiaron textos, marcas ni archivos de los compañeros. Los documentos internos del AVA no se incluyen en este repositorio.

## Verificación

Consulta [VERIFICACION.md](VERIFICACION.md) para las comprobaciones realizadas. El repositorio está preparado para compartir su URL con el docente; no se ha enviado automáticamente una entrega a AVA.
