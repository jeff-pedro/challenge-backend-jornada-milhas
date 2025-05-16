import Title from '../../ui/Title';
import DestinationCard from '../DestinationCard';
import './DestinationGrid.css';

const Grid = () => {
  const destinations = [
    {
      id: '1',
      name: 'Atacama',
      price: 'R$ 500',
      imageAddress: '/images/card-atacama.png',
      imageDescription: 'Deserto do Atacama'
    },
    {
      id: '2',
      name: 'Veneza',
      price: 'R$ 500',
      imageAddress: '/images/card-veneza.png',
      imageDescription: 'Cidade de Veneza'
    },
    {
      id: '3',
      name: 'Patagônia',
      price: 'R$ 500',
      imageAddress: '/images/card-patagonia.png',
      imageDescription: 'Montanhas da Patagônia'
    },
    {
      id: '4',
      name: 'Grand Cânion',
      price: 'R$ 500',
      imageAddress: '/images/card-grand-canyon.png',
      imageDescription: 'Mulher olhando os Canyons do Grand Canyon'
    },
    {
      id: '5',
      name: 'Turquia',
      price: 'R$ 500',
      imageAddress: '/images/card-turquia.png',
      imageDescription: 'Balões da Turquia'
    },
    {
      id: '6',
      name: 'Cordilheira dos Andes',
      price: 'R$ 500',
      imageAddress: '/images/card-cordilheira-dos-andes.png',
      imageDescription: 'Montanhas congeladas da Cordilheira dos Andes'
    }
  ]

  return (
    <section className='destination'>
      <Title text='Destinos' />
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
