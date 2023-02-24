import { Link } from "react-router-dom";
import "./Navbar.css";
import logo1 from "/Users/silviadima/Desktop/Projects/LITTLE-LEMON-FOLDER/little-lemon/src/assets/imgs/Asset 16@4x.png";
import cartImg from "/Users/silviadima/Desktop/Projects/LITTLE-LEMON-FOLDER/little-lemon/src/assets/imgs/carts.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container flex">
        <img className="navbar__logo" src={logo1} alt="little lemon logo" />
        <nav>
          <ul className="navbar__list">
            <li>
              <a className="navbar__link" href="/">
                Home
              </a>
            </li>

            <li>
              <Link className="navbar__link" to="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="navbar__link" to="/reservation">
                Reservation
              </Link>
            </li>
            <li>
              <Link className="navbar__link" to="/order-online">
                Order Online
              </Link>
            </li>
            <li>
              <Link className="navbar__link" to="/contacts">
                Contacts
              </Link>
            </li>
            <a href="cart.html">
              <img className="header__cart-img" src={cartImg} alt="cart" />
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
