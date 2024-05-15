import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const amountItems =
    cart.length === 0
      ? 0
      : cart.reduce((amount, item) => amount + item.amount, 0);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const findItem = cart.find((item) => item.id === id);
    if (findItem) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        )
      );
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const removedCart = cart.filter((item) => item.id !== id);
    setCart(removedCart);
  };

  const handleClick = (e, operation, id) => {
    e.preventDefault();
    if (operation === "increment") {
      setCart(
        cart.map((item) => {
          return item.id === id ? { ...item, amount: item.amount + 1 } : item;
        })
      );
    } else if (operation === "dicrement") {
      const cartItem = cart.find((item) => item.id === id);
      if (cartItem) {
        const newCart = cart.map((item) => {
          return item.id === id
            ? { ...item, amount: cartItem.amount - 1 }
            : item;
        });
        setCart(newCart);
      }
      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
    }
  };

  const totalCost = () => {
    let sum = 0;
    const cost = cart.map((item) => {
      sum += item.price * item.amount;
      return sum;
    });
    return cost.reduce((acc, elem) => acc + elem, 0);
  };

  const removeAllCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        amountItems,
        handleClick,
        totalCost,
        removeAllCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
