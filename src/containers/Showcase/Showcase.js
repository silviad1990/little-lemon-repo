import "./Showcase.css";
import "../../App.js";
import { Link } from "react-router-dom";
import MainImg from "/Users/silviadima/Desktop/Projects/LITTLE-LEMON-FOLDER/little-lemon/src/assets/imgs/restauranfood.jpg";
// import Form from "src/pages/Form.jsx";

function Showcase() {
  return (
    <>
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>Little Lemon</h1>
            <h3>London</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link className="btn btn-outline" to="/menu">
              Menu
            </Link>
          </div>

          <div className="showcase-form ">
            <img
              className="showcase-img"
              src={MainImg}
              alt="waiter holding a dish"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Showcase;
