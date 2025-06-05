
import { useState } from 'react';

import Hero from 'components/layout/Hero';
import SearchBar from 'components/search/SearchBar';
import DestinationGrid from 'components/destinations/DestinationGrid';
import TestimonialSection from 'components/testimonials/TestimonialSection';
import BannerBottom from 'components/layout/BannerBottom';

const Home = () => {
  const [destination, setDestination] = useState({});

  const handleSearch = (value) => value !== undefined
    ? setDestination(value)
    : setDestination({});

  return(
    <main>
      <Hero />
      <SearchBar onSearch={handleSearch} />
      <DestinationGrid filteredDestination={destination} />
      <TestimonialSection />
      <BannerBottom />
    </main>
  )
}

export default Home;
