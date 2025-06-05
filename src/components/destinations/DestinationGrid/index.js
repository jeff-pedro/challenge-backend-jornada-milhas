import styles from './DestinationGrid.module.css';
import DestinationCard from 'components/destinations/DestinationCard';
import Title from 'components/ui/Title';
// data
import { destinations } from 'data/destinations';

const Grid = ({ filteredDestination }) => {

  return (
    <section className={styles.destination}>
      <Title>Destinos</Title>
      {Object.keys(filteredDestination).length === 0 
        ? 
          <div className={styles.grid}>
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
          <div className={styles.grid}>
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
