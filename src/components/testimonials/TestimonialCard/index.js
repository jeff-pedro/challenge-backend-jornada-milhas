import './TestimonialCard.css';

const TestimonialCard = ({ text, author, image }) => {
  return(
      <div className="testimonial__card">
        <img src={image} alt={author} />
        <div className="testimonial__content">
          <p className="testimonial__text">{text}</p>
          <p className="testimonial__author">{author}</p>
        </div>
      </div>
  );
}

export default TestimonialCard;
