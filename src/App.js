import AppRoutes from './routes/AppRoutes';
import useInventario from './hooks/useInventario';

function App() {
  const inventario = useInventario();
  return <AppRoutes {...inventario} />;
}

export default App;
