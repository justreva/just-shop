import { Link } from "react-router-dom"
import { ShoppingCart } from "phosphor-react"
import { CartContext } from "../context/CartContext"
import "./Navbar.css"
import { useContext } from "react"

export const Navbar = () => {
	const { amountItems } = useContext(CartContext)

	return (
		<div className="navbar">
			<div className="navbar__items">
				<Link to="/" className="title"> JustShop </Link>
				<Link to="cart" className="cart">
					<ShoppingCart className="cart__icon"/>
					<span className="cart__amount">{amountItems}</span>
				</Link>
			</div>
		</div>
	)
}
