import styles from './DefaultButton.module.css';

const DefaultButton = ({ children }) => {
  return (<button className={styles.button}>{children}</button>);
}

export default DefaultButton;
