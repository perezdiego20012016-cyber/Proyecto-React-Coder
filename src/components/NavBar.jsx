import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Golosineria</h1>

      <ul className="categories">
        <li>Acidos</li>
        <li>Chocolates</li>
        <li>Paletas</li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;