import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

import { Product } from "./Product";

import "./Shop.css";

const Shop = () => {
  const { products } = useContext(ProductContext);
  const productClothes = products.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing"
    );
  });

  return (
    <div className="products">
      {productClothes.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Shop;
