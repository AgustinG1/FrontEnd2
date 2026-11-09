import { Link, NavLink, Outlet } from 'react-router-dom';

const enlaces = [
  ['/', 'Inicio'],
  ['/inventario', 'Inventario'],
  ['/inventario/agregar', 'Agregar artículo'],
  ['/carrito', 'Carrito'],
  ['/quienes-somos', 'Quiénes somos'],
  ['/contacto', 'Contáctanos'],
];

function MainLayout() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <Link className="brand" to="/" aria-label="La Huerta, inicio">
            <span className="brand-mark" aria-hidden="true">LH</span>
            <span><span className="site-name">La Huerta</span><span className="brand-subtitle">SUPERMERCADO</span></span>
          </Link>
          <span className="header-description">Inventario y contacto</span>
        </div>
      </header>

      <main className="main-content"><Outlet /></main>

      <footer className="site-footer">
        <span>La Huerta</span>
      </footer>

      <nav className="bottom-menu" aria-label="Menú inferior">
        {enlaces.map(([ruta, etiqueta]) => (
          <NavLink key={ruta} to={ruta} end>{etiqueta}</NavLink>
        ))}
      </nav>
    </div>
  );
}

export default MainLayout;
