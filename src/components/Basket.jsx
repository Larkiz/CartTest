import { useContext } from "react";
import { cartContext } from "../context/Context";

export const Basket = () => {
  const { basketControl } = useContext(cartContext);

  return (
    <>
      <h1>Корзина</h1>
      {basketControl.basket.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h4>кол-во {product.count}</h4>
            <h4>{product.price * product.count} рублей</h4>
            {
              <button onClick={() => basketControl.increment(product.id)}>
                Добавить
              </button>
            }
            {
              <button onClick={() => basketControl.decrement(product.id)}>
                Убрать
              </button>
            }
            {
              <button onClick={() => basketControl.delete(product.id)}>
                Удалить
              </button>
            }
          </div>
        );
      })}
    </>
  );
};
