import "./Socials.css";

import instaLogo from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/instagram-logo.png";

import twitterLogo from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/twitter-logo.png";

import facebookLogo from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/facebook-logo.png";

function Socials() {
  return (
    <div className="socials__container">
      <a href="/">
        <img src={instaLogo} alt="instagram logo" />
      </a>

      <a href="/">
        <img src={twitterLogo} alt="twitter logo" />
      </a>

      <a href="/">
        <img src={facebookLogo} alt="facebook logo" />
      </a>
    </div>
  );
}

export default Socials;
