import styles from './SearchInput.module.css';

const SearchInput = ({ placeholder, onChange, onFocus }) => {
  
  const onType = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  }
  
  return (
    <div className={styles.search}>
        <div className={styles.searchIcon}>
          <input
            onFocus={onFocus}
            onChange={onType}
            enterKeyHint='search'
            id='search-input'
            type="text" 
            placeholder={ placeholder } 
            aria-label={ placeholder } 
          />
        </div>
    </div>
  );
}

export default SearchInput;
