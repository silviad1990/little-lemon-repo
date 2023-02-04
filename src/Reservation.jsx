import Form from "./Form";
import "./Reservation.css";

function Reservation() {
  return (
    <section className="reservation main">
      <div className="container grid ">
        <h1 className="text-center lg">BOOK A TABLE AT THE LITTLE LEMON</h1>
        <div className="reservation__text">
          <h4 className="md">
            Thank you for choosing the Little Lemon Restaurant 
          </h4>
          <p className="sm">
            CHILDREN & BABIES Please include children and babies in the number
            of guests in your booking. SPECIAL REQUESTS Tell us your seating
            preference in the special requests box. We will try our best to
            accommodate you, but we cannot guarantee where your table will be
            allocated. Thank you for your co-operation. We look forward to
            seeing you soon!
          </p>
        </div>
        <div className="reservation__form showcase-form form-card">
          <h2>Book a table</h2>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Reservation;
