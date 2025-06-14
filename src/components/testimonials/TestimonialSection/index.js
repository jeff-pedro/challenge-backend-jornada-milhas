import styles from './TestimonialSection.module.css';
import Title from 'components/ui/Title';
import TestimonialCarousel from 'components/testimonials/TestimonalCarousel';

const TestimonialSection = ({ testimonials }) => {
  return(
    <section className={styles.testimonials}>
      <Title>Depoimentos</Title>
      <TestimonialCarousel testimonials={testimonials}/>
    </section>
  );
}

export default TestimonialSection;
