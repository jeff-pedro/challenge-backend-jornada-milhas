import TestimonialCard from '../TestimonialCard';
import Title from '../../ui/Title';
import './TestimonialSection.css';

const TestimonialSection = () => {
  const testimonals = [
    {
        id: '1',
        text: 'A Jornada foi uma das melhores agências de viagens que eu já experimentei. O serviço ao cliente foi excepcional, e toda a equipe foi muito atenciosa e prestativa.',
        author: 'Lauro Matos',
        image: '/images/avatar1.png'
    },
    {
      id: '2',
      text: 'Recomendo fortemente a agência de viagens Jornada. Eles oferecem um serviço personalizado e de alta qualidade que excedeu minhas expectativas em minha última viagem.',
      author: 'Talita Magalhães',
      image: '/images/avatar2.png'
    },
    {
      id: '3',
      text: 'Minha viagem com a Jornada foi incrível! Recomendo muito a agência para quem busca uma experiência emocionante e personalizada a partir das nossas necessidades.',
      author: 'Mariana Faustino',
      image: '/images/avatar3.png'
    }
  ] 

  return(
    <section class="testimonials">
      <Title>Depoimentos</Title>
      <div className='testimonial__container'>
        {testimonals.map(testimonal => 
          <TestimonialCard 
            key={testimonal.id} 
            text={testimonal.text} 
            author={testimonal.author} 
            image={testimonal.image} />
        )}
      </div>
    </section>
  );
}

export default TestimonialSection;
