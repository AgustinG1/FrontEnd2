import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Inventory from '../pages/Inventory';
import AddProduct from '../pages/AddProduct';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';

function AppRoutes({ productos, cantidadesCarrito, agregarProducto, cambiarCantidadCarrito }) {
  const inventarioProps = {
    productos,
    cantidadesCarrito,
    onAgregarAlCarrito: (id) => cambiarCantidadCarrito(id, 1),
  };

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home {...inventarioProps} />} />
        <Route path="inventario">
          <Route index element={<Inventory {...inventarioProps} />} />
          <Route path="agregar" element={<AddProduct productos={productos} onAgregar={agregarProducto} />} />
          <Route
            path=":productoId"
            element={(
              <ProductDetail {...inventarioProps} />
            )}
          />
        </Route>
        <Route
          path="carrito"
          element={<Cart productos={productos} cantidadesCarrito={cantidadesCarrito} onCambiarCantidad={cambiarCantidadCarrito} />}
        />
        <Route path="quienes-somos" element={<About />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
