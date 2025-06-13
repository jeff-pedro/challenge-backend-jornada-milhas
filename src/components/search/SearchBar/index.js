import { useState } from "react";
// components
import DefaultButton from "components/ui/DefaultButton";
import SearchInput from "components/ui/SearchInput";
// data
import { destinations } from "data/destinations";

import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {

  const [destination, setDestination] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const destinationFound = destinations.find((item) => item.name === destination);
    onSearch(destinationFound);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  }

  return (
    <section className={styles.search}>
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
          />

          <DefaultButton children='Buscar' />
        </div>
      
      </form>
    </section>
  );
}

export default SearchBar;
