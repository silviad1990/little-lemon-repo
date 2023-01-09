import Contact from "./Contact";
import Navbar from "./Navbar";
import Socials from "./Socials";
import logo2 from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/Asset 20@4x.png";

function Footer() {
  return (
    <>
      <div className="footer__left">
        <img className="footer__logo-img" src={logo2} alt="little lemon logo" />
      </div>
      <div className="footer__doormat">
        <h3 className="footer__doormat-title">Doormat Navigation</h3>
        <Navbar />
      </div>
      <div className="footer__contact">
        <h3 className="footer__contact-title">Contact</h3>
        <Contact />
      </div>
      <div className="footer__social-media">
        <h3 className="footer__social-media-title">Social Media</h3>
        <Socials />
      </div>
    </>
  );
}

export default Footer;
