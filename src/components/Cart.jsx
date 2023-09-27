import { useContext } from "react";
import { cartContext } from "../utils/Context";

export const Cart = () => {
  let { basket, setBasket } = useContext(cartContext);

  const deleteProduct = (id) => {
    let basketDump = basket;
    basketDump = basketDump.filter((item) => item.id != id);
    return setBasket([...basketDump]);
  };

  return (
    <>
      <h1>Корзина</h1>
      {basket.map((product) => {
        return (
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4>{product.price} рублей</h4>
            {<button onClick={() => deleteProduct(product.id)}>Удалить</button>}
          </div>
        );
      })}
    </>
  );
};
