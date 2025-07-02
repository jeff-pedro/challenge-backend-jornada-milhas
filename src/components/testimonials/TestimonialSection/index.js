import styles from './TestimonialSection.module.css';
import Title from 'components/ui/Title';
import TestimonialCarousel from 'components/testimonials/TestimonalCarousel';

const TestimonialSection = ({ testimonials, loadPage, currentPage }) => {
  return(
    <>
      {testimonials && testimonials.results.length > 0
        ?
          (
            <section className={styles.testimonials}>
              <Title>Depoimentos</Title>
              <TestimonialCarousel 
                testimonials={testimonials}
                loadPage={loadPage}
                currentPage={currentPage}
              />
            </section>
          )
        : ''
      }
    </>
  );
}

export default TestimonialSection;
