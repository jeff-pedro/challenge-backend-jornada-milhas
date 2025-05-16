import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import SearchBar from './components/search/SearchBar';
import DestinationGrid from './components/destinations/DestinationGrid';

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
    </div>
  );
}

export default App;
