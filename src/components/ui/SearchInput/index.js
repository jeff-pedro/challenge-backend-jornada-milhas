import './SearchInput.css';

const SearchInput = ({ placeholder, onChange }) => {
  const onType = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  }
  
  return (
    <div className="search">
        <div className="search__icon">
          <input onChange={onType} id='search-input' type="text" placeholder={ placeholder } aria-label={ placeholder } />
        </div>
    </div>
  );
}

export default SearchInput;
