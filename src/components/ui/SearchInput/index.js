import styles from './SearchInput.module.css';

const SearchInput = ({ placeholder, onChange }) => {
  const onType = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  }
  
  return (
    <div className={styles.search}>
        <div className={styles.searchIcon}>
          <input 
            onChange={onType} 
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
