import "./Showcase.css";
import "./App.css";
import MainImg from "/Users/silviadima/Desktop/Projects/LITTLE-LEMON-FOLDER/little-lemon/src/imgs/restauranfood.jpg";
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
            <a href="book-online.html" className="btn btn-outline">
              Online Menu
            </a>
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
