import { Link } from 'react-router-dom';
import styles from './DefaultLinkButton.module.css';

const DefaultLinkButton = ({ children, to, size }) => {
  return (
    <Link
      to={to}
      className={`
        ${styles.button}
        ${styles[size]}
      `}
    >
      {children}
    </Link>
  )
}

export default DefaultLinkButton;
