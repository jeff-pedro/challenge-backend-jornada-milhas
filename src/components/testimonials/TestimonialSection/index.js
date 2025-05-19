import './TestimonialSection.css';
import Title from '../../ui/Title';
import { testimonials } from '../../../data/testimonials';
import TestimonialCarousel from '../TestimonalCarousel';

const TestimonialSection = () => {
  return(
    <section class="testimonials">
      <Title>Depoimentos</Title>
      <TestimonialCarousel testimonials={testimonials}/>
    </section>
  );
}

export default TestimonialSection;
