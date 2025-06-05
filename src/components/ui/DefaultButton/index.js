import { Link } from 'react-router-dom';
import styles from './DefaultButton.module.css';

const DefaultButton = ({ children, to, size }) => {
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

export default DefaultButton;
