import { useContext } from "react";
import { cartContext } from "../context/Context";

export const Card = ({ product }) => {
  let { basketControl } = useContext(cartContext);

  const inBasket =
    basketControl.basket.findIndex((item) => item.id === product.id) >= 0;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h4>{product.price} рублей</h4>
      {inBasket ? (
        <p>В корзине</p>
      ) : (
        <button onClick={() => basketControl.add(product)}>В корзину</button>
      )}
    </div>
  );
};
