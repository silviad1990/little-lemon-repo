function Card(props) {
  return (
    <div className="card">
      <img
        className="card__img-top"
        src={props.img}
        alt="salad dish"
        style={{ width: "15rem" }}
      />
      <div className="card__body">
        <h5 className="card__title">{props.dishTitle}</h5>
        <h6 className="card__price">{props.dishPrice}</h6>
        <p className="card__text">{props.dishText}</p>
        <a className="card__link" href="/">
          Order for delivery
        </a>
      </div>
    </div>
  );
}

export default Card;
