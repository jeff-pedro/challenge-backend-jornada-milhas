import styles from './OutlinedLinkButton.module.css';

const OutlinedLinkButton = ({ children, to, buttonStyle }) => {
  return (
    <a 
      href={to} 
      className={styles.outlinedLinkButton} 
      style={buttonStyle}>{children}
    </a>
  );
}

export default OutlinedLinkButton;