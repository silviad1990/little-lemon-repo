import { useReducer, useState } from "react";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      sitting: "",
      count: 2,
      name: "",
      date: "",
      text: "",
    };
  }

  return {
    ...state,
    [event.name]: event.value,
  };
};

function Form() {
  const [formData, setFormData] = useReducer(formReducer, {
    count: 2,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 3000);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="wrapper">
      <h1>Book a Table</h1>
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset disabled={submitting}>
          <label>
            <p>Name</p>
            <input
              name="name"
              onChange={handleChange}
              value={formData.name || ""}
            />
          </label>
        </fieldset>
        <fieldset disabled={submitting}>
          <label>
            <p>Sitting Options</p>
            <select
              name="sitting"
              onChange={handleChange}
              value={formData.sitting || ""}
            >
              <option value="">--Please choose an option--</option>
              <option value="inside">Inside</option>
              <option value="outside">Outside</option>
            </select>
          </label>
          <label>
            <p>Guests</p>
            <input
              type="number"
              name="count"
              onChange={handleChange}
              step="1"
              value={formData.count || ""}
            />
          </label>
          <label form="date">
            <p>Date</p>
            <input
              type="date"
              id="start"
              onChange={handleChange}
              value={formData.date || ""}
            ></input>
          </label>
          <label form="text">
            <p>Any specific requirements?</p>
            <textarea
              id="text"
              name="text"
              onChange={handleChange}
              value={formData.text || ""}
            ></textarea>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
