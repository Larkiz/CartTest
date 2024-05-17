export function BasketControls(basket, setBasket) {
  this.basket = basket;

  this.increment = (id) => {
    const newBasket = basket.map((item) => {
      if (item.id === id) {
        item.count += 1;
      }
      return item;
    });

    return setBasket(newBasket);
  };

  this.decrement = (id) => {
    let newBasket = basket.map((item) => {
      if (item.id === id) {
        item.count -= 1;
      }

      return item;
    });

    newBasket = newBasket.filter((item) => item.count > 0);

    return setBasket(newBasket);
  };

  this.delete = (id) => {
    const newBasket = basket.filter((item) => item.id !== id);
    return setBasket(newBasket);
  };

  this.add = (product) => setBasket([...basket, { ...product, count: 1 }]);
}
