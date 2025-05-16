import './SearchInput.css';

const SearchInput = ({ placeholder }) => {
  return (
    <div class="search">
        <div class="search__icon">
          <input type="text" placeholder={ placeholder } aria-label={ placeholder } />
        </div>
    </div>
  );
}

export default SearchInput;
