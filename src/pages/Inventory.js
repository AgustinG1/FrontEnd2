import { useState } from 'react';
import { Link } from 'react-router-dom';

function Inventory({ productos, cantidadesCarrito, onAgregarAlCarrito, resumen = false }) {
  const [categoria, setCategoria] = useState('');
  const [ultimoAgregado, setUltimoAgregado] = useState(null);
  const agregado = productos.find((producto) => producto.id === ultimoAgregado);
  const Heading = resumen ? 'h2' : 'h1';
  const categorias = [...new Set(productos.map((producto) => producto.categoria))];
  const productosVisibles = categoria
    ? productos.filter((producto) => producto.categoria === categoria)
    : productos;

  return (
    <section className="page inventory-page" aria-labelledby="inventario-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">PRODUCTOS</p>
          <Heading id="inventario-title">Inventario</Heading>
        </div>
        <span className="section-note">Precios en CLP</span>
      </div>
      <p className="section-description">Agrega productos al carrito o selecciona su nombre para ver el detalle.</p>

      {!resumen && (
        <div className="inventory-filter">
          <label htmlFor="filtro-categoria">Filtrar por categoría</label>
          <select id="filtro-categoria" value={categoria} onChange={(event) => setCategoria(event.target.value)}>
            <option value="">Todas las categorías</option>
            {categorias.map((opcion) => (
              <option key={opcion} value={opcion}>{opcion}</option>
            ))}
          </select>
        </div>
      )}

      <p role="status" className="inventory-feedback">
        {agregado && (
          <>
            Agregaste {agregado.nombre} al carrito. Unidades: {cantidadesCarrito[agregado.id] ?? 0}.{' '}
            <Link to="/carrito">Ver carrito</Link>
          </>
        )}
      </p>

      <div className="table-container" tabIndex="0" role="region" aria-label="Tabla de inventario; desplaza horizontalmente en pantallas pequeñas">
        <table>
          <caption>Productos de La Huerta</caption>
          <thead>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Producto</th>
              <th scope="col">Marca</th>
              <th scope="col">Categoría</th>
              <th scope="col">Precio</th>
              <th scope="col">Stock</th>
              <th scope="col">Disponibilidad</th>
            </tr>
          </thead>
          <tbody>
            {productosVisibles.map((producto) => (
              <tr key={producto.id}>
                <td className="product-code">{producto.id}</td>
                <td>
                  <strong><Link to={`/inventario/${producto.id}`}>{producto.nombre}</Link></strong>
                  <span className="product-size">{producto.presentacion}</span>
                  <button
                    className="button inventory-add"
                    type="button"
                    aria-label={`Agregar ${producto.nombre} al carrito`}
                    disabled={producto.stock <= 0}
                    onClick={() => {
                      onAgregarAlCarrito(producto.id);
                      setUltimoAgregado(producto.id);
                    }}
                  >
                    Agregar al carrito
                  </button>
                </td>
                <td>{producto.marca || 'Sin registrar'}</td>
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
  );
}

export default Inventory;
