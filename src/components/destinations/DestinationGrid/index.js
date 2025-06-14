import styles from './DestinationGrid.module.css';
import DestinationCard from 'components/destinations/DestinationCard';
import Title from 'components/ui/Title';

const Grid = ({ filteredDestination, destinations }) => {
  return (
    <section className={styles.destination}>
      <Title>Destinos</Title>
      
      {destinations.length !== 0
        ?
          Object.keys(filteredDestination).length === 0 
            ? 
              <div className={styles.grid}>
                {destinations.map(destination => 
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                    linkText='Ver Detalhes'
                  />
                )}
              </div>
            :
              <div className={styles.grid}>
                  <DestinationCard
                    key={filteredDestination.id}
                    destination={filteredDestination}
                    linkText='Ver Detalhes'
                  />
              </div>
        : 
          'Nenhum destino encontrado.'
      }
    </ section>
  );
}

export default Grid;
