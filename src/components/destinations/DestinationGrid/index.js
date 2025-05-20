import './DestinationGrid.css';
import DestinationCard from '../DestinationCard';
import Title from '../../ui/Title';
import { destinations } from '../../../data/destinations';

const Grid = ({ filteredDestination }) => {

  return (
    <section className='destination'>
      <Title>Destinos</Title>
      {Object.keys(filteredDestination).length === 0 
        ? 
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
        :
          <div className='grid'>
              <DestinationCard 
                key={filteredDestination.id}
                name={filteredDestination.name}
                price={filteredDestination.price}
                imageAddress={filteredDestination.imageAddress}
                imageDescription={filteredDestination.imageDescription}
                linkText='Ver Detalhes'
              />
          </div>
      }
    </ section>
  );
}

export default Grid;
