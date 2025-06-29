import DefaultLinkButton from 'components/ui/DefaultLinkButton';
import styles from './DestinationCard.module.css';

const DestinationCard = ({ destination, linkText }) => {
  const photo = destination.photos[0]?.url;
  const alternativeText = destination.photos[0]?.description;
  
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

        <DefaultLinkButton
          to={`destinations/${destination.id}`}
          size='lg'
        >
          {linkText}
        </DefaultLinkButton>
      </div>
    </div>
  );
}

export default DestinationCard;
