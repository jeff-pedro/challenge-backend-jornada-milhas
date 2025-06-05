import styles from './DestinationCard.module.css';
import LinkButton from 'components/ui/LinkButton';

const DestinationCard = ({ name, price, imageAddress, imageDescription, linkText }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage} 
        src={imageAddress} 
        alt={imageDescription} 
      />
      
      <div className={styles.cardInfo}>
        <h3 className={styles.cardName}>
          {name}
        </h3>
      
        <p className={styles.cardPrice}>
          {price}
        </p>
      
        <LinkButton 
          to='destination.html'
          buttonStyle={{ lineHeight: '1.4' }}
        >
          {linkText}
        </LinkButton>
      </div>
    </div>
  );
}

export default DestinationCard;
