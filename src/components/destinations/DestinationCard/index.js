import './DestinationCard.css';

const DestinationCard = ({ name, price, imageAddress, imageDescription, linkText }) => {
  return (
    <div class="card">
      <img src={imageAddress} alt={imageDescription} />
      <div class="card__info">
        <h3 class="card__name">{name}</h3>
        <p class="card__price">{price}</p>
        <a class="card__link" href="destination.html" target='_blank' rel='noopener noreferrer'>
          {linkText}
        </a>    
      </div>
    </div>
  );
}

export default DestinationCard;
