import "./Contacts.css";
import map from "/Users/silviadima/Desktop/Projects/LITTLE-LEMON-FOLDER/little-lemon/src/assets/imgs/map.jpg";

function Contacts() {
  return (
    <section className="contacts my-2 py-2 p-5">
      <div className="container grid p-3">
        <div>
          {" "}
          <div className="p-2">
            <h1>Opening Hours</h1>
            <h4>TUESDAY - FRIDAY: 4:00pm - 11:00pm</h4>
            <h4>SATURDAYS: 1:00pm - 11:00pm</h4>
            <h4>SUNDAYS & PUBLIC HOLIDAYS: 1:00pm – 11:00pm</h4>
          </div>
          <div className="p-2">
            <h1>Our Address</h1>
            <h4>181 Charminster Road, Bournemouth BH8 9QQ</h4>
          </div>
          <div className="p-2">
            <h1>For reservation</h1>
            <h4>01202 914845</h4>
          </div>
        </div>

        <div>
          <img className="p-5" src={map} alt="map" />{" "}
        </div>
      </div>
    </section>
  );
}

export default Contacts;
