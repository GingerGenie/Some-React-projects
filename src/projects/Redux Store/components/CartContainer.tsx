

import CartItem from "./CartItem";
import { useAppSelector, useAppDispatch } from "../App/hook";
import { clearCart } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () : React.JSX.Element => {
    const dispatch = useAppDispatch();
    const {cartItems, total, amount} = useAppSelector((store) => store.cart)
    
    if (amount < 1) {
        return <section className="cart">
            <header>
                <h2>Your bag</h2>
                <h4 className="empty-cart">is empty</h4>
            </header>
        </section>
    }

    return (
        <section className="cart">
            <header>
                <h2>Your bag</h2>
                <header>
                    <div>
                        {cartItems.map((item) => {
                            return <CartItem key={item.id} {...item} />
                        })}
                    </div>
                    <footer>
                        <hr/>
                        <div className="cart-total">
                            <h4>
                                total <span>{total}₽</span>
                            </h4>
                        </div>
                        <button className="btn clear-btn" onClick={() => {dispatch(openModal())}}>clear cart</button>
                    </footer>
                </header>
            </header>
        </section>
    )
}
export default CartContainer;