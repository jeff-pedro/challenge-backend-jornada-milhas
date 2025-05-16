import './Hero.css';

const Hero = ({ titleFirstPart, titleSecondPart }) => {
  return (
    <section className='hero'>
      <div className='hero__content'>
        <h1>
          {titleFirstPart}<br />
          <span>{titleSecondPart}</span>
        </h1>
        <img src='/images/woman-traveler.png' alt='Traveler woman with a backpack'></img>
      </div>
    </section>
  );
}

export default Hero;
