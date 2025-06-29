import styles from './DefaultButton.module.css';

const DefaultButton = ({ children, disabled = false }) => {
  return (<button className={styles.button} disabled={disabled}>{children}</button>);
}

export default DefaultButton;
