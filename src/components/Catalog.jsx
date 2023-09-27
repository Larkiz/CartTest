import { useContext } from "react";
import { cartContext } from "../utils/Context";
import { Card } from "./Card";

export const Catalog = () => {
  let { catalog } = useContext(cartContext);

  return (
    <>
      <h1>Каталог</h1>
      <div style={{ display: "flex", gap: 20 + "px" }}>
        {catalog.map((product) => {
          return <Card product={product} />;
        })}
      </div>
    </>
  );
};
