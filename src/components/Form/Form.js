import { useState } from "react";
import { Link } from "react-router-dom";
import Confirmation from "../Confirmation";

function Form(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  return (
    <div className="form-card wrapper">
      <h1>Book a Table</h1>

      <form className="reservation-form">
        <div>
          <label htmlFor="fName">
            First Name:{" "}
            <input
              type="text"
              id="fName"
              placeholder=""
              required
              minLength={2}
              maxLength={50}
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            ></input>
          </label>
        </div>

        <div>
          <label htmlFor="lName">
            Last Name:{" "}
            <input
              type="text"
              id="lName"
              placeholder=""
              minLength={2}
              maxLength={50}
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            ></input>
          </label>
        </div>

        <div>
          <label htmlFor="email">
            Email:{" "}
            <input
              type="email"
              id="email"
              placeholder=""
              value={email}
              required
              minLength={4}
              maxLength={200}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
        </div>

        <div>
          <label htmlFor="phonenum">
            Phone Number:{" "}
            <input
              type="tel"
              id="phonenum"
              placeholder="(xxx)-xxx-xxxx"
              value={tel}
              required
              minLength={10}
              maxLength={25}
              onChange={(e) => setTel(e.target.value)}
            ></input>
          </label>
        </div>

        <div>
          <label htmlFor="people">
            Number of Guests:{" "}
            <input
              type="number"
              id="people"
              placeholder=""
              value={people}
              required
              min={1}
              max={100}
              onChange={(e) => setPeople(e.target.value)}
            ></input>
          </label>
        </div>

        <div>
          <label htmlFor="date">
            Select Date:{" "}
            <input
              type="date"
              id="date"
              required
              value={date}
              onChange={handleDateChange}
            ></input>
          </label>
        </div>

        <div>
          <label htmlFor="time">
            Select Time:{" "}
            <select id="time" required>
              {finalTime}
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="occasion">
            Occasion:{" "}
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
              <option>Other</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="preferences">
            Seating preferences:{" "}
            <select
              id="preferences"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
            >
              <option>None</option>
              <option>Indoors</option>
              <option>Outdoor (Patio)</option>
              <option>Outdoor (Sidewalk)</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="comments">
            Special Requirements:{" "}
            <textarea
              id="comments"
              rows={8}
              cols={50}
              placeholder="...please inform us about any alergies"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </label>
        </div>

        <div>
          <small>
            <p>
              Note: You cannot edit your reservation after submission. Please
              double-check your answer before submitting your reservation
              request.
            </p>
          </small>
          <Link
            className="btn btn-online action-button"
            to="/confirmation"
            element={<Confirmation />}
          >
            Book Table
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Form;
