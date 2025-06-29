import { useEffect, useState } from 'react';
// components
import Hero from 'components/layout/Hero';
import SearchBar from 'components/search/SearchBar';
import DestinationGrid from 'components/destinations/DestinationGrid';
import TestimonialSection from 'components/testimonials/TestimonialSection';
import BannerBottom from 'components/layout/BannerBottom';
// api
import { getDestinations } from 'services/destinations';
import { getTestimonials } from 'services/testimonials';

const Home = () => {
  const [destination, setDestination] = useState({});
  const [destinations, setDestinations] = useState([]);
  const [testimonials, setTestimonials] = useState(null);

  const fetchDestinations = async () => {
    const { results } = await getDestinations();
    setDestinations(results);
  }

  const fetchTestimonials = async () => {
    const response = await getTestimonials();
    setTestimonials(response);
  }


  useEffect(() => {
    fetchDestinations();
    fetchTestimonials();
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
