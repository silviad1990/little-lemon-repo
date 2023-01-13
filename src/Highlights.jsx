import Button from "./Button";
import CardMain from "./Card";
import "./Highlights.css";
import saladImg from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/salad.jpg";
import bruschettaImg from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/bruschetta.jpg.webp";
import cakeImg from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/lemon-cake.png";
function Highlights() {
  return (
    <>
      <section className="highlights__top">
        <h2 className="highlights__title">Specials</h2>
        <Button className="highlights__btn" title="Online Menu" />
      </section>
      <section className="highlights__cards">
        <CardMain
          className="card"
          img={saladImg}
          dishTitle="Greek Salad"
          dishPrice="$9.99"
          dishText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ."
        />
        <CardMain
          className="card"
          img={bruschettaImg}
          dishTitle="Bruschetta"
          dishPrice="$7.99"
          dishText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ."
        />
        <CardMain
          className="card"
          img={cakeImg}
          dishTitle="Lemon Cake"
          dishPrice="$8.99"
          dishText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ."
        />
      </section>
    </>
  );
}

export default Highlights;
