import './TestimonialCard.css';

const TestimonialCard = ({ text, author, image }) => {
  return(
      <div class="testimonial__card">
        <img src={image} alt={author} />
        <div class="testimonial__content">
          <p class="testimonial__text">{text}</p>
          <p class="testimonial__author">{author}</p>
        </div>
      </div>
  );
}

export default TestimonialCard;
