/* eslint-disable jsx-a11y/img-redundant-alt */
import "./Navbar.css";

import logo1 from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/Asset 16@4x.png";
import cartImg from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/carts.png";

function Navbar() {
  return (
    <>
      <nav className="navMenu">
        <img className="header__logo" src={logo1} alt="little lemon logo" />
        <ul>
          <li>
            <a href="./home">Home</a>
          </li>
          <li>
            <a href="./about">About</a>
          </li>
          <li>
            <a href="./menu">Menu</a>
          </li>
          <li>
            <a href="./reservation">Reservation</a>
          </li>
          <li>
            <a href="./book-online">Book Online</a>
          </li>
          <li>
            <a href="./login">Login</a>
          </li>
          <img className="header__cart-img" src={cartImg} alt="cart image" />
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
