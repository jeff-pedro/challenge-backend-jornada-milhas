import LinkButton from '../../ui/LinkButton';
import './DestinationCard.css';

const DestinationCard = ({ name, price, imageAddress, imageDescription, linkText }) => {
  return (
    <div class="card">
      <img src={imageAddress} alt={imageDescription} />
      <div class="card__info">
        <h3 class="card__name">{name}</h3>
        <p class="card__price">{price}</p>
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
