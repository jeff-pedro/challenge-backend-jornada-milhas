import styles from './SearchInput.module.css';

const SearchInput = ({ placeholder, onChange, handleKeyDown }) => {
  const onType = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  }

  // const handleKeyDown = (e) => {
  //   if (e.key === 'Enter') {
  //     e.target.blur();
  //   }
  // }
  
  return (
    <div className={styles.search}>
        <div className={styles.searchIcon}>
          <input
            onChange={onType}
            // onKeyDown={handleKeyDown}
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
