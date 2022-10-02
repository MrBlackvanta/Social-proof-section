import Rate from "./Rate";
import "./Hero.scss";

export default function Hero(props) {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="hero-text-heading">{props.heading}</h1>
        <p className="hero-text-description">{props.description}</p>
      </div>

      <div className="hero-img">
        <Rate description="Rated 5 Stars in Reviews" className="box-1" />
        <Rate description="Rated 5 Stars in Report Guru" className="box-2" />
        <Rate description="Rated 5 Stars in BestTech" />
      </div>
    </div>
  );
}
