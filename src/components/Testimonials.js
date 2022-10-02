import Testimonial from "./Testimonial";
import colton from "../images/image-colton.jpg";
import irene from "../images/image-irene.jpg";
import anne from "../images/image-anne.jpg";
import "./Testimonials.scss";

export default function testimonials() {
  const data = [
    {
      img: colton,
      fullname: "Colton Smith",
      title: "Verified Buyer",
      description:
        '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
      className: "test-1",
    },
    {
      img: irene,
      fullname: "Irene Roberts",
      title: "Verified Buyer",
      description:
        '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
      className: "test-2",
    },
    {
      img: anne,
      fullname: "Anne Wallace",
      title: "Verified Buyer",
      description:
        '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
      className: "test-3",
    },
  ];

  return (
    <section className="testimonials">
      {data.map((el) => (
        <Testimonial
          image={el.img}
          fullName={el.fullname}
          title={el.title}
          description={el.description}
          className={el.className}
        />
      ))}
    </section>
  );
}
