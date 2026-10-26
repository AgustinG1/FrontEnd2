import { Link } from 'react-router-dom';
import productos from '../data/productos';

function Home() {
  return (
    <>
      <section className="intro-section">
        <p className="eyebrow">SUPERMERCADO LA HUERTA</p>
        <h1>Lo esencial, en su lugar.</h1>
        <p className="intro-text">
          Bienvenido a La Huerta. En esta página puedes consultar los productos,
          sus categorías, precios y existencias.
        </p>
        <Link className="text-link" to="/quienes-somos">Conoce nuestro supermercado →</Link>
      </section>

      <section className="page inventory-page" aria-labelledby="inventario-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PÁGINA PRINCIPAL</p>
            <h2 id="inventario-title">Inventario de productos</h2>
          </div>
          <span className="section-note">Precios en pesos chilenos</span>
        </div>
        <p className="section-description">
          Consulta el stock disponible de cada presentación. Las cantidades y precios
          corresponden a datos de ejemplo para esta actividad.
        </p>

        <div className="table-container" tabIndex="0" role="region" aria-label="Tabla de inventario; desplaza horizontalmente en pantallas pequeñas">
          <table>
            <caption>Productos del supermercado La Huerta — inventario de ejemplo</caption>
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
        <p className="table-note">El stock se expresa en unidades de la presentación indicada.</p>
      </section>

      <section className="help-section">
        <div>
          <h2>¿Quieres conocer más de La Huerta?</h2>
          <p>Encuentra nuestra presentación y nuestros datos de contacto en el menú inferior.</p>
        </div>
        <Link className="button" to="/contacto">Contáctanos</Link>
      </section>
    </>
  );
}

export default Home;
