import "./Showcase.css";
import "./App.css";
import Form from "./Form";

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

          <div className="showcase-form form-card">
            <h2>Book a table</h2>
            <Form />
          </div>
        </div>
      </section>
    </>
  );
}

export default Showcase;
