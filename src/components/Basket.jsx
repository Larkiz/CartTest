import { useContext, useEffect, useState } from "react";
import { cartContext } from "../utils/Context";

export const Basket = () => {
  let { basket, setBasket, decrementCart, deleteProduct, incrementCart } =
    useContext(cartContext);

  return (
    <>
      <h1>Корзина</h1>
      {basket.map((product) => {
        return (
          <div>
            <h2>{product.title}</h2>
            <h4>кол-во {product.count}</h4>
            <h4>{product.price * product.count} рублей</h4>
            {
              <button onClick={() => incrementCart(product.id)}>
                Добавить
              </button>
            }
            {<button onClick={() => decrementCart(product.id)}>Убрать</button>}
            {<button onClick={() => deleteProduct(product.id)}>Удалить</button>}
          </div>
        );
      })}
    </>
  );
};
