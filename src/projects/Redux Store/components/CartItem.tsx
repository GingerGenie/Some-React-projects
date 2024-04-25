import { ChevronUp, ChevronDown } from "../icons";
import { cartItemsType } from "../features/cart/cartSlice";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useAppDispatch } from "../App/hook";

const CartItem = ({id, img, title, price, amount}: cartItemsType) 
: React.JSX.Element => {
    const dispatch = useAppDispatch();

    return (
        <article className="cart-item">
            <img src={img} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">{price} Ruble</h4>
                <button className='remove-btn' onClick={() => {dispatch(removeItem(id))}}>remove</button>
            </div>
            <div>
                <button className="amount-btn" onClick={() => dispatch(increase(id))}>
                    <ChevronUp/>
                </button>
                <p className="amount">{amount}</p>
                <button className="amount-btn" onClick={() => dispatch(decrease(id))}>
                    <ChevronDown/>
                </button>
            </div>
        </article>
    )
}
export default CartItem;