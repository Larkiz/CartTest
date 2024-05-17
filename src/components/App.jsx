import { Route, Routes } from "react-router-dom";
import { Catalog } from "./Catalog";
import { Navigate, Link } from "react-router-dom";
import { Basket } from "./Basket";

const Header = () => {
  return (
    <nav style={{ display: "flex", gap: 10 + "px" }}>
      <Link to="cart">Корзина</Link>

      <Link to="catalog">Каталог</Link>
    </nav>
  );
};

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="catalog" />} />
        <Route path="cart" element={<Basket />} />
        <Route path="catalog" element={<Catalog />} />
      </Routes>
    </>
  );
};
