import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

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

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <span>La Huerta · Supermercado ficticio</span>
        <span>Formativa 1 · Desarrollo Frontend II</span>
      </footer>

      <nav className="bottom-menu" aria-label="Menú inferior">
        <Link to="/" aria-current={location.pathname === '/' ? 'page' : undefined}>Inicio</Link>
        <Link to="/quienes-somos" aria-current={location.pathname === '/quienes-somos' ? 'page' : undefined}>Quiénes somos</Link>
        <Link to="/contacto" aria-current={location.pathname === '/contacto' ? 'page' : undefined}>Contáctanos</Link>
      </nav>
    </div>
  );
}

export default App;
