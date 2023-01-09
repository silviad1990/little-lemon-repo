import Contact from "./Contact";
import Socials from "./Socials";
import "./Footer.css";
import logo2 from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/Asset 20@4x.png";

function Footer() {
  return (
    <footer id="footer__main">
      <div className="footer__grid">
        <section className="footer__1">
          <img
            className="footer__logo-img"
            src={logo2}
            alt="little lemon logo"
          />
        </section>
        <section className="footer__2">
          <h3 className="footer__doormat-title">Doormat Navigation</h3>
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
          </ul>
        </section>
        <section className="footer__3">
          <h3 className="footer__contact-title">Contact</h3>
          <Contact />
        </section>
        <section className="footer__4">
          <h3 className="footer__social-media-title">Social Media</h3>
          <Socials />
        </section>
      </div>
    </footer>
  );
}

export default Footer;
