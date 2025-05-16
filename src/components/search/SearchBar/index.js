import Button from "../../ui/Button";
import Form from "../../ui/Form";
import SearchInput from "../../ui/SearchInput";

const SearchBar = () => {
  return (
          <Form title='Encontre seu próximo destino'>
            <SearchInput placeholder='Origem' />
            <Button>
              Buscar
            </Button>
          </Form>
  );
}

export default SearchBar;
