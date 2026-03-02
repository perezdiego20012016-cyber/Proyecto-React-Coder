import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import NavBar from "../components/NavBar";
import CartContainer from "../components/CartContainer";

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Catálogo principal */}
        <Route path="/" element={<ItemListContainer />} />

        {/* Catálogo filtrado por categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        {/* Detalle de producto */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        {/* Carrito */}
        <Route path="/cart" element={<CartContainer />} />

        {/* 404 */}
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;