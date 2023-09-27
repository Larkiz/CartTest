import { useContext, useEffect, useState } from "react";
import { cartContext } from "../utils/Context";

export const Basket = () => {
  let { basket, setBasket, basketPrice } = useContext(cartContext);

  const deleteProduct = (id) => {
    let basketDump = basket;
    basketDump = basketDump.filter((item) => item.id != id);
    return setBasket([...basketDump]);
  };

  const addToCart = (id) => {
    let basketDump = basket;
    let basketId = basketDump.findIndex((item) => item.id == id);
    basketDump[basketId].count = basketDump[basketId].count += 1;

    return setBasket([...basketDump]);
  };
  const minusFromCart = (id) => {
    let basketDump = basket;
    let basketId = basketDump.findIndex((item) => item.id == id);
    basketDump[basketId].count = basketDump[basketId].count -= 1;

    return setBasket([...basketDump]);
  };

  return (
    <>
      <h1>Корзина</h1>
      {basket.map((product) => {
        return (
          <div>
            <h2>{product.title}</h2>
            <h4>кол-во {product.count}</h4>
            <h4>{product.price * product.count} рублей</h4>
            {<button onClick={() => addToCart(product.id)}>Добавить</button>}
            {<button onClick={() => minusFromCart(product.id)}>Убрать</button>}
            {<button onClick={() => deleteProduct(product.id)}>Удалить</button>}
          </div>
        );
      })}
    </>
  );
};
