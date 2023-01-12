import Button from "./Button";
import "./HeroSection.css";
import heroImg from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/restauranfood.jpg";

function HeroSection() {
  return (
    <>
      <section className="container__left">
        <h1 className="hero-section__title">Little Lemon</h1>
        <h3 className="hero-section__sub-title">London</h3>
        <p className="hero-section__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button title="Reserve a Table" />
      </section>
      <section className="container__right">
        <img
          className="hero-section__img"
          src={heroImg}
          alt="waiter serving a dish"
        />
      </section>
    </>
  );
}

export default HeroSection;
