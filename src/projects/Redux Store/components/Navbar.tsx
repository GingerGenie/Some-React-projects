import { useAppSelector } from "../App/hook";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () : React.JSX.Element => {
    const amount = useAppSelector((store) => store.cart.amount)
    return (
        <nav>
            <div className="nav-center">
                <h3>redux toolkit</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;