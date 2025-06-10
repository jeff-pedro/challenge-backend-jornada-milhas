import { useEffect, useState } from 'react';
import styles from './TestimonialCarousel.module.css';
import TestimonialCard from 'components/testimonials/TestimonialCard';

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Define how many testimonials card at a time 
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setTestimonialsPerPage(window.innerWidth <= 767 ? 1 : 3);
    }

    // Set initial value to run when the component is mounted
    handleResize();

    // Add event listener to monitor when user resizes screen
    window.addEventListener('resize', handleResize);

    // Remove the event when the component is unmounted
    return () => window.removeEventListener('resize', handleResize);
  }, [])
  
  // Calculate total number of pages
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // Go to the next index of testimonials array
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + testimonialsPerPage >= testimonials.length
        ? prevIndex
        : prevIndex + testimonialsPerPage
    );
  }

  // Go to the prev index of testimonials array
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
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        {currentTestimonials.map(testimonial =>
            <TestimonialCard
              key={testimonial.id}
              text={testimonial.text}
              author={testimonial.author}
              image={testimonial.image}
            />
        )}

        {/* Button for Smaller Screens */}
        <button className={styles.prev} onClick={prevSlide}>
          <MdNavigateBefore size={40} />
        </button>
        
        <button className={styles.next} onClick={nextSlide}>
          <MdNavigateNext size={40} />
        </button>
      </div>
          
      <div className={styles.carouselControls}>
        <button
          className={`
            ${styles.carouselControls} 
            ${styles.carouselButton} 
            ${styles.carouselButtonPrev} 
            ${currentIndex === 0 ? styles.carouselButtonInactive : ''}
          `} 
          onClick={prevSlide}
          aria-label="Previous testimonials"
        >
          <MdNavigateBefore size={35} />
        </button>
        
        <div className={styles.carouselIndicators}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`${styles.carouselIndicator} ${currentIndex === index * testimonialsPerPage ? styles.carouselIndicatorActive : ''}`}
              onClick={() => setCurrentIndex(index * testimonialsPerPage)}
              aria-label={`Página ${index + 1} de depoimentos`}
            />
          ))}
        </div>
        
        <button 
          className={`
            ${styles.carouselButton} 
            ${styles.carouselButtonNext} 
            ${currentIndex + testimonialsPerPage >= testimonials.length ? styles.carouselButtonInactive : ''}
          `}
          onClick={nextSlide}
          aria-label="Próximos testimonials"
        >
          <MdNavigateNext size={35} />
        </button>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
