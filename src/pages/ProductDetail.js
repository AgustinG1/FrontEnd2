import { Link, useParams } from 'react-router-dom';

function ProductDetail({ productos, cantidadesCarrito, onAgregarAlCarrito }) {
  const { productoId } = useParams();
  const producto = productos.find((articulo) => articulo.id === productoId);

  if (!producto) {
    return (
      <section className="page">
        <h1>Artículo no encontrado</h1>
        <Link className="text-link" to="/inventario">Volver al inventario</Link>
      </section>
    );
  }

  return (
    <section className="page product-detail" aria-labelledby="producto-title">
      <p className="eyebrow">DETALLE DEL ARTÍCULO</p>
      <h1 id="producto-title">{producto.nombre}</h1>

      <dl className="product-details">
        <dt>Código</dt>
        <dd>{producto.id}</dd>
        <dt>Marca</dt>
        <dd>{producto.marca || 'Sin registrar'}</dd>
        <dt>Categoría</dt>
        <dd>{producto.categoria}</dd>
        <dt>Presentación</dt>
        <dd>{producto.presentacion}</dd>
        <dt>Precio en CLP</dt>
        <dd>${producto.precio.toLocaleString('es-CL')}</dd>
        <dt>Stock disponible</dt>
        <dd>{producto.stock}</dd>
      </dl>

      <div className="form-actions">
        <button className="button" type="button" disabled={producto.stock <= 0} onClick={() => onAgregarAlCarrito(producto.id)}>
          Agregar al carrito
        </button>
        <Link className="text-link" to="/carrito">Ver carrito</Link>
        <Link className="text-link" to="/inventario">Volver al inventario</Link>
      </div>
      <p role="status" className="form-description">
        Unidades en el carrito: {cantidadesCarrito[producto.id] ?? 0}.
        {producto.stock <= 0 && ' Sin stock disponible.'}
      </p>
    </section>
  );
}

export default ProductDetail;
