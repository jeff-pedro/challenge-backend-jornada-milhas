import Hero from 'components/layout/Hero';
import SearchBar from 'components/search/SearchBar';
import DestinationGrid from 'components/destinations/DestinationGrid';
import TestimonialSection from 'components/testimonials/TestimonialSection';
import HomePageBottom from 'components/layout/HomePageBottom';
import { useState } from 'react';

const Home = () => {
  const [destination, setDestination] = useState({});

  const handleSearch = (value) => value !== undefined
    ? setDestination(value)
    : setDestination({});

  return(
    <div>
      <Hero 
        titleFirstPart='Compartilhe milhas,'
        titleSecondPart='compartilhe o mundo.'
      />
      <SearchBar onSear ch={handleSearch} />
      <DestinationGrid filteredDestination={destination} />
      <TestimonialSection />
      <HomePageBottom />
    </div>
  )
}

export default Home;
