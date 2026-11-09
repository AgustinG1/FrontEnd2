import { Link } from 'react-router-dom';
import Inventory from './Inventory';

function Home({ productos, cantidadesCarrito, onAgregarAlCarrito }) {
  return (
    <>
      <section className="intro-section">
        <p className="eyebrow">SUPERMERCADO LA HUERTA</p>
        <h1>Lo esencial, en su lugar.</h1>
        <p className="intro-text">Consulta nuestros productos y su disponibilidad.</p>
        <Link className="text-link" to="/quienes-somos">Conócenos →</Link>
      </section>

      <Inventory productos={productos} cantidadesCarrito={cantidadesCarrito} onAgregarAlCarrito={onAgregarAlCarrito} resumen />

      <section className="help-section">
        <div>
          <h2>¿Tienes alguna consulta?</h2>
          <p>Conversemos.</p>
        </div>
        <Link className="button" to="/contacto">Contáctanos</Link>
      </section>
    </>
  );
}

export default Home;
