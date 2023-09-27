import { Route, Routes } from "react-router-dom";

import { Catalog } from "./Catalog";
import { Navigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Basket } from "./Basket";

export const App = () => {
  return (
    <>
      <nav style={{ display: "flex", gap: 10 + "px" }}>
        <Link to="cart">Корзина</Link>

        <Link to="catalog">Каталог</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="catalog" />} />
        <Route path="cart" element={<Basket />} />
        <Route path="catalog" element={<Catalog />} />
      </Routes>
    </>
  );
};
