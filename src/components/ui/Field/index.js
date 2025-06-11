import styles from './Field.module.css';

const Field = ({ type = '', id, label, value, placeholder, handleChange, required }) => {

  const onChange = (e) => {
    handleChange(e.target.value);
  }

  return(
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}

export default Field;
