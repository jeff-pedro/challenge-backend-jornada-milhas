import { useState } from "react";
import Button from "components/ui/Button";
import Form from "components/ui/Form";
import SearchInput from "components/ui/SearchInput";
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
            
            <Button>
              Buscar
            </Button>
          </Form>
  );
}

export default SearchBar;
