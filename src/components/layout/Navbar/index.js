import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = ({ children, logoImage, logoDiscription }) => {
  const { pathname } = useLocation();
  
  return(
    <header>
      <nav className={styles.navbar}>
        <Link 
          to='/'
          style={pathname === '/' ? { pointerEvents: 'none' } : undefined}
        >
          <img src={logoImage} alt={logoDiscription} />
        </Link>
        
        <div className={styles.navbarButtons}>
          { children }
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
