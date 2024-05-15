import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { Link } from "react-router-dom";

import { PlusCircle, Info } from "phosphor-react";

export const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product" id={product.id}>
      <div className="product__image">
        <img src={product.image} alt="product" />
      </div>

      <div className="product__content">
        <span className="product__category">{product.category}</span>
        <h4 className="product__title">{product.title}</h4>
      </div>

      <div className="product__buy">
        <span className="product__price">{product.price}$</span>
        <div className="product__buy-btns">
          <button
            className="buy"
            onClick={() => addToCart(product, product.id)}
          >
            <PlusCircle size={24} />
          </button>
          <Link to={`info/${product.id}`} className="info__link">
            <Info size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};
