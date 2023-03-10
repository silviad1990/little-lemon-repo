import "./Footer.css";
import logo2 from "../../assets/imgs/Asset 20@4x.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="grid py-5">
          <div className="text-center">
            <img className="footer-logo" src={logo2} alt="Little Lemon logo" />
          </div>
          <div>
            <h3 className="py-2">Doormat Navigation</h3>
            <ul>
              <li>
                <a href="./">Home</a>
              </li>

              <li>
                <a href="./menu">Menu</a>
              </li>
              <li>
                <a href="./reservation">Reservation</a>
              </li>
              <li>
                <a href="./order-online">Book Online</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="py-2">Contact</h3>
            <ul>
              <li>26 Commercial Roadf, London</li>
              <li>01202 551716</li>
              <li>info@little-lemon.com</li>
            </ul>
          </div>
          <div>
            <h3 className="py-2">Social Media</h3>
            <a href="/">
              <i className="fab fa-instagram fa-2x "></i>{" "}
            </a>

            <a href="/">
              <i className="fab fa-twitter fa-2x p-1"></i>
            </a>

            <a href="/">
              <i className="fab fa-facebook fa-2x "></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
