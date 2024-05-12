

export const CartProduct = ({product}) => {
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
                    <span>{product.price * product.amount}$</span>

                    <div className="item__amount">
                      <button>-</button>
                      <input type="text" value={product.amount} />
                      <button>+</button>
                    </div>

                  </div>
										<button className="item__delete">Delete</button>
                </div>
              </div>
            </li>
	)
}
