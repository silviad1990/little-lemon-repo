import "./Confirmation.css";
export default function Confirmation() {
  return (
    <section className="confirmation main">
      <div className="form-card text-center">
        {/* <img
        className="confirmation-image"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img> */}

        <h1 className=" text-center lg">Your Reservation is Confirmed!</h1>
        <p className="md">
          A confirmation message has been sent to your email.
        </p>
        <h4 className="md p-4">Thanks for dining with us!</h4>
      </div>
    </section>
  );
}
