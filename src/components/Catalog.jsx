import { Card } from "./Card";
import { catalog } from "../data.js";
export const Catalog = () => {
  return (
    <>
      <h1>Каталог</h1>
      <div style={{ display: "flex", gap: 20 + "px" }}>
        {catalog.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};
