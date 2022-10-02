import "./Testimonial.scss";

export default function Testimonial(props) {
  return (
    <div className={`testimonial ${props.className}`}>
      <div className="testimonial-author">
        <img
          src={props.image}
          alt="person"
          className="testimonial-author-img"
        />
        <div className="testimonial-author-info">
          <h2 className="testimonial-author-info-name">{props.fullName}</h2>
          <p className="testimonial-author-info-title">{props.title}</p>
        </div>
      </div>

      <p className="testimonial-description">{props.description}</p>
    </div>
  );
}
