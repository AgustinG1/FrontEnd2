import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="page">
      <h1>Página no encontrada</h1>
      <p>La dirección solicitada no existe.</p>
      <Link className="text-link" to="/inventario">Volver al inventario</Link>
    </section>
  );
}

export default NotFound;
