import { useState } from 'react';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import styles from './TestimonialCarousel.module.css';
import TestimonialCard from 'components/testimonials/TestimonialCard';

const TestimonialCarousel = ({ testimonials, currentPage, loadPage }) => {
  // Set the start and end of the screen tap action
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;
  
  const screenSize = 896;


  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    if (window.innerWidth >= screenSize) return;
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };
  
  const totalPages = Math.ceil(testimonials.total / testimonials.limit);
  
  const nextSlide = () => {
    loadPage(currentPage + 1);
  }

  const prevSlide = () => {
    loadPage(currentPage - 1);
  }

  return (  
    <div className={styles.carousel}>
      <div 
        className={styles.carouselContainer}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
      
        {testimonials.results.map(testimonial =>
            <TestimonialCard
              key={testimonial.id}
              text={testimonial.testimonial}
              author={testimonial.user.fullName}
              image={testimonial?.photo?.url ?? null}
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
          
      {/* Buttons */}
      <div className={styles.carouselControls}>
        <button
          className={`
            ${styles.carouselControls} 
            ${styles.carouselButton} 
            ${styles.carouselButtonPrev} 
            ${currentPage === 1 ? styles.carouselButtonInactive : ''}
          `} 
          onClick={prevSlide}
          aria-label="Previous testimonials"
        >
          <MdNavigateBefore size={35} />
        </button>
        
        {/* Buttons dots */}
        <div className={styles.carouselIndicators}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`${styles.carouselIndicator} ${currentPage === (index + 1) ? styles.carouselIndicatorActive : ''}`}
              onClick={() => loadPage(index + 1)}
              aria-label={`Página ${index + 1} de depoimentos`}
            />
          ))}
        </div>
        
        <button 
          className={`
            ${styles.carouselButton} 
            ${styles.carouselButtonNext} 
            ${currentPage === totalPages ? styles.carouselButtonInactive : ''}
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
