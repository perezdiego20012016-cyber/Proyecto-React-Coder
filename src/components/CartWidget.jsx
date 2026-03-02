import "./CartWidget.css";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <Link to="/cart" className="cart">
      🛒
      <span className="badge">3</span>
    </Link>
  );
}

export default CartWidget;