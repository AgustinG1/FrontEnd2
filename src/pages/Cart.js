import { Link } from 'react-router-dom';

function Cart({ productos, cantidadesCarrito, onCambiarCantidad }) {
  const articulos = productos.filter((producto) => cantidadesCarrito[producto.id] > 0);

  return (
    <section className="page" aria-labelledby="carrito-title">
      <h1 id="carrito-title">Carrito de compras</h1>

      {articulos.length === 0 ? (
        <p role="status" className="form-description">Tu carrito está vacío.</p>
      ) : (
        <ul className="cart-list" aria-label="Artículos del carrito">
          {articulos.map((producto) => (
            <li className="cart-item" key={producto.id}>
              <div>
                <Link to={`/inventario/${producto.id}`}>{producto.nombre}</Link>
                <span className="product-size">{producto.presentacion} · Stock disponible: {producto.stock}</span>
              </div>
              <div className="cart-quantity">
                <button
                  className="button"
                  type="button"
                  aria-label={`Disminuir cantidad de ${producto.nombre}`}
                  onClick={() => onCambiarCantidad(producto.id, -1)}
                >
                  −
                </button>
                <span role="status">Cantidad: {cantidadesCarrito[producto.id]}</span>
                <button
                  className="button"
                  type="button"
                  aria-label={`Aumentar cantidad de ${producto.nombre}`}
                  disabled={producto.stock === 0}
                  onClick={() => onCambiarCantidad(producto.id, 1)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <Link className="text-link" to="/inventario">Volver al inventario</Link>
    </section>
  );
}

export default Cart;
