import styles from './Form.module.css';

const Form = ({ children, title, onSubmit }) => {
  return (
    <section className={styles.formContainer}>
      <h2>{title}</h2>
      
      <form onSubmit={onSubmit}>
        { children }
      </form>
    </section>
  );
}

export default Form;
