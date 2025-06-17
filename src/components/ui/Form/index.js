import styles from './Form.module.css';
import DefaultButton from '../DefaultButton';

const Form = ({ children, buttonText, onSubmit, buttonDisabled }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      
      { children }
      
      <div className={styles.button}>
        <DefaultButton children={buttonText} disabled={buttonDisabled}/>
      </div>
    </form>
  );
}

export default Form;
