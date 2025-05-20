import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import SearchBar from './components/search/SearchBar';
import DestinationGrid from './components/destinations/DestinationGrid';
import TestimonialSection from './components/testimonials/TestimonialSection';
import Footer from './components/layout/Footer';
import HomePageBottom from './components/layout/HomePageBottom';
import { useState } from 'react';

function App() {
  const [destination, setDestination] = useState({});

  const handleSearch = (value) => value !== undefined
    ? setDestination(value)
    : setDestination({});
  
  return (
    <div>
      <Header />
      <Hero 
        titleFirstPart='Compartilhe milhas,'
        titleSecondPart='compartilhe o mundo.'
      />
      <SearchBar onSearch={handleSearch} />
      <DestinationGrid filteredDestination={destination} />
      <TestimonialSection />
      <HomePageBottom />
      <Footer />
    </div>
  );
}

export default App;
