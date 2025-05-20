import LinkButton from '../../ui/LinkButton';
import './DestinationCard.css';

const DestinationCard = ({ name, price, imageAddress, imageDescription, linkText }) => {
  return (
    <div className="card">
      <img src={imageAddress} alt={imageDescription} />
      <div className="card__info">
        <h3 className="card__name">{name}</h3>
        <p className="card__price">{price}</p>
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
