import { createContext, useState } from "react";

export const cartContext = createContext();

export const Context = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const catalog = [
    { id: 1, title: "Iphone 10", price: 500, description: "iphone gavno" },
    { id: 2, title: "Iphone 9", price: 550, description: "iphone gavno" },
    { id: 3, title: "Iphone 20", price: 666, description: "iphone gavno" },
  ];

  const value = { catalog, basket, setBasket };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
