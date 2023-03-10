import "./Specials.css";
import saladImg from "../../assets/imgs/salad.jpg";
import bruschettaImg from "../../assets/imgs/bruschetta.jpg.webp";
import cakeImg from "../../assets/imgs/lemon-cake.png";

function Specials() {
  return (
    <>
      <section className="specials">
        <div className="container grid">
          <div>
            <h2 className="specials-heading text-center lg my-3">Specials</h2>
          </div>

          <div className="card-sl">
            <div className="card-image">
              <img src={saladImg} alt="salad" />
            </div>

            <div className="card-heading md">Greek Salad</div>
            <div className="card-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </div>
            <div className="card-price">£7,99</div>
            <a href="./order-online" className="card-button">
              {" "}
              Order for delivery
            </a>
          </div>

          <div className="card-sl">
            <div className="card-image">
              <img src={bruschettaImg} alt="bruschetta" />
            </div>
            <div className="card-heading md">Bruschetta</div>
            <div className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="card-price">£7,40</div>
            <a href="./order-online" className="card-button">
              {" "}
              Order for delivery
            </a>
          </div>

          <div className="card-sl">
            <div className="card-image">
              <img src={cakeImg} alt="cake" />
            </div>
            <div className="card-heading md">Lemon Cake</div>
            <div className="card-text">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam.
            </div>
            <div className="card-price">£6,00</div>
            <a href="./order-online" className="card-button">
              {" "}
              Order for delivery
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Specials;
