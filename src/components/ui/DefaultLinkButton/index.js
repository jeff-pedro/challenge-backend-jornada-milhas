import { Link } from 'react-router-dom';
import styles from './DefaultLinkButton.module.css';

const DefaultLinkButton = ({ children, to, size, outlined }) => {
  return (
    <Link
      to={to}
      className={`
        ${styles.button}
        ${styles[size]}
        ${outlined ? styles.outlined : ''}
      `}
    >
      {children}
    </Link>
  )
}

export default DefaultLinkButton;
