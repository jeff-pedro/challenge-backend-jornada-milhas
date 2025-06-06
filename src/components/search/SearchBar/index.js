import { useState } from "react";
// components
import Form from "components/ui/Form";
import DefaultButton from "components/ui/DefaultButton";
import SearchInput from "components/ui/SearchInput";
// data
import { destinations } from "data/destinations";

const SearchBar = ({ onSearch }) => {

  const [destination, setDestination] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const destinationFound = destinations.find((item) => item.name === destination);
    onSearch(destinationFound);
  } 

  return (
          <Form onSubmit={handleSubmit} title='Encontre seu próximo destino' >
            <SearchInput 
              placeholder='Origem' 
              onChange={(destination) => setDestination(destination)}
            />

            <DefaultButton>
              Buscar
            </DefaultButton>
          </Form>
  );
}

export default SearchBar;
