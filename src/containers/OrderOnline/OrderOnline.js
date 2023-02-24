import ubereats from "/Users/silviadima/Desktop/Projects/LITTLE-LEMON-FOLDER/little-lemon/src/assets/imgs/uber-eats.jpeg";
import justeat from "/Users/silviadima/Desktop/Projects/LITTLE-LEMON-FOLDER/little-lemon/src/assets/imgs/just-eat.png";
import deliveroo from "/Users/silviadima/Desktop/Projects/LITTLE-LEMON-FOLDER/little-lemon/src/assets/imgs/deliveroo.jpeg";
import "./OrderOnline.css";
function OrderOnline() {
  return (
    <>
      <section className="specials">
        <div className="container grid p-3">
          <div>
            <h1 className="specials-heading text-center my-3 p-4">
              ORDER ONLINE
            </h1>
          </div>

          <div className="card-sl ">
            <div className="card-image">
              <img src={ubereats} alt="salad" />
            </div>

            <a href="https://www.ubereats.com/gb" className="card-button">
              {" "}
              Uber Eats
            </a>
          </div>

          <div className="card-sl">
            <div className="card-image">
              <img src={justeat} alt="bruschetta" />
            </div>

            <a href="https://www.just-eat.co.uk/" className="card-button">
              {" "}
              Just Eat
            </a>
          </div>

          <div className="card-sl">
            <div className="card-image">
              <img src={deliveroo} alt="cake" />
            </div>

            <a href="https://deliveroo.co.uk/" className="card-button">
              {" "}
              Deliveroo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderOnline;
