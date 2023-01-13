import Card from "react-bootstrap/Card";
import "./Card.css";

function CardMain(props) {
  return (
    <Card style={{ width: "min-content" }}>
      <Card.Img
        variant="top"
        src={props.img}
        style={{ width: "17rem", height: "10rem", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="card__title">{props.dishTitle}</Card.Title>

        <Card.Text>{props.dishText}</Card.Text>
        <a className="card__link" href="/">
          Order for delivery
        </a>
      </Card.Body>
    </Card>
  );
}

export default CardMain;
