import star from "../images/icon-star.svg";
import "./Rate.scss";

export default function Rate(props) {
  return (
    <div className={`rate ${props.className}`}>
      <div className="rate-stars">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>

      <h2 className="rate-text">{props.description}</h2>
    </div>
  );
}
