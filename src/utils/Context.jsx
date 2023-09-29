import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

export const Context = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [basketPrice, setBasketPrice] = useState(0);

  const catalog = [
    {
      id: 1,
      title: "Iphone 10",
      price: 500,
      description: "iphone gavno",
      count: 1,
    },
    {
      id: 2,
      title: "Iphone 9",
      price: 550,
      description: "iphone gavno",
      count: 1,
    },
    {
      id: 3,
      title: "Iphone 20",
      price: 666,
      description: "iphone gavno",
      count: 1,
    },
  ];

  const addProduct = (product) => setBasket((prev) => [...prev, product]);

  const incrementCart = (id) => {
    let basketDump = [...basket];
    let basketId = basketDump.findIndex((item) => item.id == id);
    basketDump[basketId].count = basketDump[basketId].count += 1;

    return setBasket([...basketDump]);
  };

  const decrementCart = (id) => {
    let basketDump = [...basket];
    let basketId = basketDump.findIndex((item) => item.id == id);
    basketDump[basketId].count = basketDump[basketId].count -= 1;

    return setBasket([...basketDump]);
  };

  const deleteProduct = (id) => {
    let basketDump = [...basket];
    basketDump = basketDump.filter((item) => item.id != id);
    return setBasket([...basketDump]);
  };

  const value = {
    catalog,
    basket,
    incrementCart,
    decrementCart,
    deleteProduct,
    addProduct,
    basketPrice,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
