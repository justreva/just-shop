import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { CartProduct } from "./CartProduct";
import { Trash } from "phosphor-react";
export const Cart = () => {
  const { cart, totalCost, removeAllCart } = useContext(CartContext);

  return (
    <div className="cart__page">
      <h1>JustCart</h1>
      <div className="cart__content">
        <ul className="cart__list">
          {cart.length === 0 ? (
            <div>
              <h3 className="empty">Your cart is empty</h3>
              <img
                src="https://wallpapers-clan.com/wp-content/uploads/2022/08/meme-gif-pfp-15.gif"
                alt=""
              />
            </div>
          ) : (
            cart.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))
          )}
        </ul>
      </div>
      {cart.length > 0 && (
        <div className="cart__total">
          <span className="total__price">Total: {totalCost().toFixed()}$</span>
          <Trash size={32} className="delete__cart" onClick={removeAllCart}/>
        </div>
      )}
    </div>
  );
};
