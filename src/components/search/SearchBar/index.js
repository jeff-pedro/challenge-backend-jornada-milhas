import { useState } from "react";
// components
import Form from "components/ui/Form";
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

  return (
    <div className={styles.searchForm}>
          <Form onSubmit={handleSubmit} title='Encontre seu próximo destino' >
            <SearchInput 
              placeholder='Origem' 
              onChange={(destination) => setDestination(destination)}
            />

            <div className={styles.searchFormButton}>
              <DefaultButton>
                Buscar
              </DefaultButton>
            </div>

          </Form>
    </div>
  );
}

export default SearchBar;
