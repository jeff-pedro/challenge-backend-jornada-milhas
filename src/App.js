import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import SearchBar from './components/search/SearchBar';
import DestinationGrid from './components/destinations/DestinationGrid';
import TestimonialSection from './components/testimonials/TestimonialSection';
import Footer from './components/layout/Footer';
import HomePageBottom from './components/layout/HomePageBottom';

function App() {
  return (
    <div>
      <Header />
      <Hero 
        titleFirstPart='Compartilhe milhas,'
        titleSecondPart='compartilhe o mundo.'
      />
      <SearchBar />
      <DestinationGrid />
      <TestimonialSection />
      <HomePageBottom />
      <Footer />
    </div>
  );
}

export default App;
