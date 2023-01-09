import instaLogo from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/instagram-logo.png";

import twitterLogo from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/twitter-logo.png";

import facebookLogo from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/facebook-logo.png";

function Socials() {
  return (
    <>
      <ul>
        <li>
          <a href="/">
            <img src={instaLogo} alt="instagram logo" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={twitterLogo} alt="twitter logo" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={facebookLogo} alt="facebook logo" />
          </a>
        </li>
      </ul>
    </>
  );
}

export default Socials;
