import { Link } from "react-router-dom";
import "./Navigation.css";
import logo1 from "/Users/silviadima/Desktop/Projects/LITTLE-LEMON-FOLDER/little-lemon/src/assets/imgs/Asset 16@4x.png";
import cartImg from "/Users/silviadima/Desktop/Projects/LITTLE-LEMON-FOLDER/little-lemon/src/assets/imgs/carts.png";

function Navbar() {
  return (
    <>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <a className="menu__item" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="menu__item" href="/menu">
              Menu
            </a>
          </li>
          <li>
            <a className="menu__item" href="/reservation">
              Reservation
            </a>
          </li>
          <li>
            <a className="menu__item" href="/order-online">
              Order Online
            </a>
          </li>
          <li>
            <a className="menu__item" href="/contacts">
              Contacts
            </a>
          </li>
        </ul>
      </div>

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
    </>
  );
}

export default Navbar;
