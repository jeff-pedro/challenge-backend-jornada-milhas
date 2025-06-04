import styles from './Hero.module.css';
import banner from 'assets/banner-homepage-hero.png';
import womanTraveler from 'assets/woman-traveler.png';

const Hero = () => {
  return (
    <section 
      className={styles.heroContainer} 
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className={styles.content}>
      
        <h1>
          Compartilhe milhas<br />
          <span>compartilhe o mundo.</span>
        </h1>
      
        <img src={womanTraveler} alt='Traveler woman with a backpack'></img>
      </div>
    </section>
  );
}

export default Hero;
