import './DestinationGrid.css';
import DestinationCard from '../DestinationCard';
import Title from '../../ui/Title';
import { destinations } from '../../../data/destinations';

const Grid = () => {
  return (
    <section className='destination'>
      <Title>Destinos</Title>
      <div className='grid'>
        {destinations.map(destination => 
          <DestinationCard 
            key={destination.id}
            name={destination.name}
            price={destination.price}
            imageAddress={destination.imageAddress}
            imageDescription={destination.imageDescription}
            linkText='Ver Detalhes'
          />
        )}
      </div>
    </ section>
  );
}

export default Grid;
