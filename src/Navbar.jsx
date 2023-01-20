import "./Navbar.css";
import logo1 from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/Asset 16@4x.png";
import cartImg from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/carts.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container flex">
        <img className="navbar__logo" src={logo1} alt="little lemon logo" />
        <nav>
          <ul className="navbar__list">
            <li>
              <a className="navbar__link" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a className="navbar__link" href="about.html">
                About
              </a>
            </li>
            <li>
              <a className="navbar__link" href="menu.html">
                Menu
              </a>
            </li>
            <li>
              <a className="navbar__link" href="reservation.html">
                Reservation
              </a>
            </li>
            <li>
              <a className="navbar__link" href="book_online.html">
                Book Online
              </a>
            </li>
            <li>
              <a className="navbar__link" href="login.html">
                Login
              </a>
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
