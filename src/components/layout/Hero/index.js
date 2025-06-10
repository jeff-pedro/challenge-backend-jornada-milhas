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
      
        <div className={styles.title}>
          <span>Compartilhe milhas</span>
          <span>compartilhe o mundo.</span>
        </div>
      
        <img src={womanTraveler} alt='Traveler woman with a backpack'></img>
      </div>
    </section>
  );
}

export default Hero;
