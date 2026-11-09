import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProduct({ productos, onAgregar }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const categorias = [...new Set(productos.map((producto) => producto.categoria))];

  function guardarProducto(event) {
    event.preventDefault();
    const datos = new FormData(event.currentTarget);
    const mensaje = onAgregar(Object.fromEntries(datos));
    if (mensaje) {
      setError(mensaje);
      return;
    }
    navigate('/inventario');
  }

  return (
    <section className="page" aria-labelledby="agregar-title">
      <h1 id="agregar-title">Agregar artículo</h1>
      <p className="form-description">Completa los datos para incorporar un artículo al inventario.</p>

      <form className="inventory-form" onSubmit={guardarProducto} onChange={() => setError('')}>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="producto-nombre">Nombre</label>
            <input id="producto-nombre" name="nombre" required />
          </div>
          <div className="form-field">
            <label htmlFor="producto-marca">Marca</label>
            <input id="producto-marca" name="marca" required />
          </div>
          <div className="form-field">
            <label htmlFor="producto-categoria">Categoría</label>
            <input id="producto-categoria" name="categoria" list="categorias-producto" required />
            <datalist id="categorias-producto">
              {categorias.map((categoria) => <option key={categoria} value={categoria} />)}
            </datalist>
          </div>
          <div className="form-field">
            <label htmlFor="producto-presentacion">Presentación</label>
            <input id="producto-presentacion" name="presentacion" required />
          </div>
          <div className="form-field">
            <label htmlFor="producto-precio">Precio en CLP</label>
            <input id="producto-precio" name="precio" type="number" min="0" step="1" max={Number.MAX_SAFE_INTEGER} required />
          </div>
          <div className="form-field">
            <label htmlFor="producto-stock">Stock</label>
            <input id="producto-stock" name="stock" type="number" min="0" step="1" max={Number.MAX_SAFE_INTEGER} required />
          </div>
        </div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <div className="form-actions">
          <button className="button" type="submit">Guardar artículo</button>
        </div>
      </form>
    </section>
  );
}

export default AddProduct;
