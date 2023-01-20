import "./Showcase.css";
import "./App.css";

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
            <form className="form">
              <div className="form-control">
                <input type="date" name="Date" placeholder="Date" required />
              </div>
              <div className="form-control">
                <label for="res-time">Time</label>
                <select id="res-time ">
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </select>
              </div>
              <div className="form-control">
                <input
                  type="number"
                  name="Number of guests"
                  placeholder="Number of guests"
                  min="1"
                  max="10"
                  id="guests"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="Occasion"
                  placeholder="Occasion (Birthday, Anniversary)"
                  required
                />
              </div>
              <input type="submit" value="Send" className="btn btn-pri" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Showcase;
