import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { XCircle } from "phosphor-react";

export const CartProduct = ({ product }) => {
  const { removeFromCart, handleClick } = useContext(CartContext);
  return (
    <li className="cart__item">
      <div className="item__image">
        <img src={product.image} alt="" />
      </div>

      <div className="item__info">
        <div className="item__desc">
          <span className="item__category">{product.category}</span>
          <h3 className="item__name">{product.title}</h3>
        </div>

        <div className="item__price">
          <div className="main">
            <span>{(product.price * product.amount).toFixed(1)}$</span>

            <div className="item__amount">
              <button onClick={(e) => handleClick(e, "dicrement", product.id)}>
                -
              </button>
              <div className="amount">{product.amount}</div>
              <button onClick={(e) => handleClick(e, "increment", product.id)}>
                +
              </button>
            </div>
          </div>
          <XCircle
            size={24}
            className="item__delete"
            onClick={() => removeFromCart(product.id)}
          />
        </div>
      </div>
    </li>
  );
};
