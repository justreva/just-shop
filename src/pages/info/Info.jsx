import { useContext } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ProductContext";

import "./Info.css";
const Info = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  return products.map((product) => {
    if (product.id == id) {
      return (
        <div key={product.id} className="info__product">
          <div className="product__box">
            <div className="info__image">
              <img src={product.image} alt="" />
            </div>
            <div className="info__box">
              <h1 className="info__title">{product.title}</h1>
              <h3 className="info__price">{product.price}$</h3>
              <p className="info__description">{product.description}</p>

              <button
                className="add__product"
                onClick={() => addToCart(product, product.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
    }
  });
};

export default Info;
