import { useState } from 'react';
import productosIniciales from '../data/productos';

function useInventario() {
  const [{ productos, cantidadesCarrito }, setInventario] = useState({
    productos: productosIniciales,
    cantidadesCarrito: {},
  });

  function agregarProducto(datos) {
    const producto = Object.fromEntries(
      ['nombre', 'marca', 'categoria', 'presentacion'].map((campo) => [
        campo, String(datos[campo] ?? '').trim().replace(/\s+/g, ' '),
      ])
    );

    if (Object.values(producto).some((valor) => !valor)) {
      return 'Completa el nombre, la marca, la categoría y la presentación del artículo.';
    }

    for (const campo of ['precio', 'stock']) {
      const valor = String(datos[campo] ?? '').trim();
      const numero = Number(valor);
      if (!valor || !Number.isSafeInteger(numero) || numero < 0) {
        return 'El precio y el stock deben ser números enteros iguales o mayores que cero.';
      }
      producto[campo] = numero;
    }

    const categoriaExistente = productos.find((articulo) => (
      articulo.categoria.toLocaleLowerCase('es') === producto.categoria.toLocaleLowerCase('es')
    ));
    producto.categoria = categoriaExistente?.categoria ?? producto.categoria;

    setInventario((actual) => ({
      ...actual,
      productos: [
        ...actual.productos,
        { ...producto, id: 'LH-' + String(actual.productos.length + 1).padStart(3, '0') },
      ],
    }));
    return '';
  }

  function cambiarCantidadCarrito(id, cambio) {
    if (!Number.isSafeInteger(cambio)) return;

    setInventario((actual) => {
      const producto = actual.productos.find((articulo) => articulo.id === id);
      if (!producto) return actual;

      const cantidad = (actual.cantidadesCarrito[id] ?? 0) + cambio;
      const stock = producto.stock - cambio;
      if (!Number.isSafeInteger(cantidad) || !Number.isSafeInteger(stock) || cantidad < 0 || stock < 0) {
        return actual;
      }

      const cantidades = { ...actual.cantidadesCarrito };
      if (cantidad === 0) delete cantidades[id];
      else cantidades[id] = cantidad;

      return {
        productos: actual.productos.map((articulo) => (
          articulo.id === id ? { ...articulo, stock } : articulo
        )),
        cantidadesCarrito: cantidades,
      };
    });
  }

  return { productos, cantidadesCarrito, agregarProducto, cambiarCantidadCarrito };
}

export default useInventario;
