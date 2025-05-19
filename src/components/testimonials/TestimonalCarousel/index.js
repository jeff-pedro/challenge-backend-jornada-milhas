import { useState } from 'react';
import './TestimonialCarousel.css';
import TestimonialCard from '../TestimonialCard';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define how many testimonials card at a time 
  const testimonialsPerPage = 3;
  
  // Calculate total number of pages
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + testimonialsPerPage >= testimonials.length
        ? prevIndex
        : prevIndex + testimonialsPerPage
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - testimonialsPerPage <= 0
        ? 0
        : prevIndex - testimonialsPerPage
    );
  }

  // Get the testimonials of current page
  const currentTestimonials = testimonials.slice(
    currentIndex,
    Math.min(currentIndex + testimonialsPerPage, testimonials.length)
  );

  return (
    <div className="carousel">
      <div className="carousel__container">
        {currentTestimonials.map(testimonial => (
          <TestimonialCard
            key={testimonial.id}
            text={testimonial.text}
            author={testimonial.author}
            image={testimonial.image}
          />
        ))}
      </div>
      
      <div className="carousel__controls">
        <button
          className={`carousel__button carousel__button--prev ${currentIndex === 0 ? 'carousel__button--inactive' : ''}`} 
          onClick={prevSlide}
          aria-label="Previous testimonials"
        >
          &#10094;
        </button>
        
        <div className="carousel__indicators">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`carousel__indicator ${currentIndex === index * testimonialsPerPage ? 'carousel__indicator--active' : ''}`}
              onClick={() => setCurrentIndex(index * testimonialsPerPage)}
              aria-label={`Página ${index + 1} de depoimentos`}
            />
          ))}
        </div>
        
        <button 
          className={`carousel__button carousel__button--next ${currentIndex + testimonialsPerPage >= testimonials.length ? 'carousel__button--inactive' : ''}`}
          onClick={nextSlide}
          aria-label="Próximos testimonials"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
