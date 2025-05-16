import Button from './components/Button';
import Form from './components/Form';
import Hero from './components/Hero';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <div>
      <Hero 
        titleFirstPart='Compartilhe milhas,'
        titleSecondPart='compartilhe o mundo.'
      />
      <Form>
        <SearchInput />
        <Button>
          Buscar
        </Button>
      </Form>
    </div>
  );
}

export default App;
