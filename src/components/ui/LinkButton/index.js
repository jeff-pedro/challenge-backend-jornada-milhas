import styles from './LinkButton.module.css';

const LinkButton = ({ children, to, buttonStyle }) => {
  return (
    <a 
      href={to} 
      className={styles.linkButton} 
      style={buttonStyle} 
      target='_blank' 
      rel='noopener noreferrer'
    >
      {children}
    </a>
    );
}

export default LinkButton;
