import { createContext, useState } from "react";

import { BasketControls } from "../functions/basketControls.js";

export const cartContext = createContext();

export const Context = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const basketControl = new BasketControls(basket, setBasket);

  const value = {
    basketControl,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
