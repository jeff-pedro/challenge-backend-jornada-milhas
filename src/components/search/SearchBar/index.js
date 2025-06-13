import styles from './SearchBar.module.css';
import { useEffect, useState } from "react";
// components
import DefaultButton from "components/ui/DefaultButton";
import SearchInput from "components/ui/SearchInput";
// data
import { destinations } from "data/destinations";

const SearchBar = ({ onSearch }) => {

  const [destination, setDestination] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  const screenSize = 896;

  const handleSubmit = (e) => {
    e?.preventDefault();
    const destinationFound = destinations.find((item) => item.name === destination);
    onSearch(destinationFound);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
      e.target.blur();
    }
  }

  // On smaller screens, automatically scroll the SearchBar component to the top
  const scrollToSearch = () => {
    if (window.innerWidth >= screenSize) return;
    window.scroll(0, scrollPosition);
  }
  
  useEffect(() => {
    const searchElement = document.getElementById('searchbar')
    const positionY = searchElement.getBoundingClientRect().y;
    setScrollPosition(positionY);
  }, []);

  return (
    <section id='searchbar' className={styles.search}>
      <form 
        className={styles.form}
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
      >
        
        <h2 className={styles.title}>
          Encontre seu próximo destino
        </h2>
        
        <div className={styles.inputContainer}>
          <SearchInput 
            placeholder='Origem' 
            onChange={(destination) => setDestination(destination)}
            handleKeyDown={handleKeyDown}
            onFocus={scrollToSearch}
          />

          <DefaultButton children='Buscar' />
        </div>
      
      </form>
    </section>
  );
}

export default SearchBar;
