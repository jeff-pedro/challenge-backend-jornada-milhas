import styles from './DestinationCard.module.css';
import LinkButton from 'components/ui/LinkButton';

const DestinationCard = ({ destination, linkText }) => {
  const photo = destination.photos[0].url;
  const alternativeText = destination.photos[0].description;
  
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage} 
        src={photo} 
        alt={alternativeText} 
      />
      
      <div className={styles.cardInfo}>
        <h3 className={styles.cardName}>
          {destination.name}
        </h3>
      
        <p className={styles.cardPrice}>
          {destination.price}
        </p>
      
        <LinkButton
          to={`destinations/${destination.id}`}
          buttonStyle={{ lineHeight: '1.4' }}
        >
          {linkText}
        </LinkButton>
      </div>
    </div>
  );
}

export default DestinationCard;
