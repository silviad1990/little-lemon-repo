import { useState } from "react";

function Form() {
  const [, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setDate("");
    console.log("form submitted");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-control">
          <input
            id="date"
            type="date"
            name="Date"
            placeholder="Date"
            required
          />
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
    </>
  );
}

export default Form;
