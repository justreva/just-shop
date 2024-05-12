import { PlusCircle } from "phosphor-react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
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
        <button onClick={() => addToCart(product, product.id)}><PlusCircle size={24}/></button>
      </div>
    </div>
  );
};
