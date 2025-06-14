import { useEffect, useState } from 'react';
// components
import Hero from 'components/layout/Hero';
import SearchBar from 'components/search/SearchBar';
import DestinationGrid from 'components/destinations/DestinationGrid';
import TestimonialSection from 'components/testimonials/TestimonialSection';
import BannerBottom from 'components/layout/BannerBottom';
// data
// import { destinations } from "data/destinations";
import { getDestinations } from 'services/destinations';
import { testimonials } from 'data/testimonials';

const Home = () => {
  const [destination, setDestination] = useState({});
  const [destinations, setDestinations] = useState([]);

  const fetchDestinations = async () => {
    const response = await getDestinations();
    setDestinations(response);
  }

  useEffect(() => {
    fetchDestinations();
  }, [])
  

  const handleSearch = (destinationFound) => !destinationFound
    ? setDestination({})
    : setDestination(destinationFound);

  return(
    <main>
      <Hero />

      <SearchBar 
        destinations={destinations}
        onSearch={handleSearch}
      />

      <DestinationGrid 
        destinations={destinations}
        filteredDestination={destination} 
      />

      <TestimonialSection 
        testimonials={testimonials}
      />
      
      <BannerBottom />
    </main>
  )
}

export default Home;
