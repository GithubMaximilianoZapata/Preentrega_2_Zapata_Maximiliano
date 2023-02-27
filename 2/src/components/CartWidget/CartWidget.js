import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return <Link to="/cart" className="cart">🛒<span>0</span></Link>
};
export default CartWidget;