import { createContext, useEffect, useState } from "react";
import { findDOMNode } from "react-dom";

export const CartContext = createContext([]);

export  const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const amountItems = cart.reduce((amount, item) => amount + item.amount, 0);
	const addToCart = (product ,id) => {
		const newItem = {...product, amount: 1 };
		const findItem = cart.find(item => item.id === id);
		if(findItem){
			setCart(cart.map(item => item.id === id? {...item, amount: item.amount + 1} : item));
		}
		else{
			console.log("item added")
			setCart([...cart, newItem]);
		}
		console.log(cart);
	}

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, amountItems }}>
      {children}
    </CartContext.Provider>
  );
}