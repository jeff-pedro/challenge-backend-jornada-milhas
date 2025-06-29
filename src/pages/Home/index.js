import { useEffect, useState } from 'react';
// components
import Hero from 'components/layout/Hero';
import SearchBar from 'components/search/SearchBar';
import DestinationGrid from 'components/destinations/DestinationGrid';
import TestimonialSection from 'components/testimonials/TestimonialSection';
import BannerBottom from 'components/layout/BannerBottom';
// api
import { getDestinationByName, getDestinations } from 'services/destinations';
import { getTestimonials } from 'services/testimonials';

const Home = () => {
  const [destination, setDestination] = useState({});
  const [destinations, setDestinations] = useState([]);
  const [testimonials, setTestimonials] = useState(null);

  const fetchAllDestinations = async () => {
    const response = await getDestinations();
    setDestinations(response);
  }

  const fetchDestination = async (name) => {
    const response = await getDestinationByName(name);
    setDestination(response);
  }

  const fetchAllTestimonials = async () => {
    const response = await getTestimonials();
    setTestimonials(response);
  }


  useEffect(() => {
    fetchAllDestinations();
    fetchAllTestimonials();
  }, []);

  const handleSearch = async (searchDestination) => {
    await fetchDestination(searchDestination);
  }
  
  // const handleSearch = (destinationFound) => !destinationFound
  //   ? setDestination({})
  //   : setDestination(destinationFound);

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
