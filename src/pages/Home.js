import { Link } from 'react-router-dom';
import productos from '../data/productos';

function Home() {
  return (
    <>
      <section className="intro-section">
        <p className="eyebrow">SUPERMERCADO LA HUERTA</p>
        <h1>Lo esencial, en su lugar.</h1>
        <p className="intro-text">Consulta nuestros productos y su disponibilidad.</p>
        <Link className="text-link" to="/quienes-somos">Conócenos →</Link>
      </section>

      <section className="page inventory-page" aria-labelledby="inventario-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PRODUCTOS</p>
            <h2 id="inventario-title">Inventario</h2>
          </div>
          <span className="section-note">Precios en CLP</span>
        </div>
        <p className="section-description">Precios y existencias por presentación.</p>

        <div className="table-container" tabIndex="0" role="region" aria-label="Tabla de inventario; desplaza horizontalmente en pantallas pequeñas">
          <table>
            <caption>Productos de La Huerta</caption>
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Producto</th>
                <th scope="col">Categoría</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th scope="col">Disponibilidad</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <td className="product-code">{producto.id}</td>
                  <td>
                    <strong>{producto.nombre}</strong>
                    <span className="product-size">{producto.presentacion}</span>
                  </td>
                  <td>{producto.categoria}</td>
                  <td className="price">${producto.precio.toLocaleString('es-CL')}</td>
                  <td className="stock">{producto.stock}</td>
                  <td>
                    <span className={producto.stock > 0 ? 'status available' : 'status unavailable'}>
                      {producto.stock > 0 ? 'Disponible' : 'Sin stock'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">Stock por presentación.</p>
      </section>

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
