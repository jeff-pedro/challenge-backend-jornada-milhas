import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

import { IoMenu, IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';


const Navbar = ({ children, logoImage, logoDiscription }) => {
  const { pathname } = useLocation();

  const [isActive, setIsActive] = useState(false);

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

        {/* Menu */}
        <div className={styles.menuIcons}>
          <IoMenu
            onClick={() => setIsActive(true)}
            size={32}
            className={`
              ${styles.menuButton}
              ${isActive ? styles.active : ''}
            `}
          />

          <IoCloseOutline
              onClick={() => setIsActive(false)}
              size={32}
              className={`
                ${styles.menuButtonClose}
                ${isActive ? styles.active : ''}
              `}
          />
        </div>

        <ul className={`
          ${styles.menu}
          ${isActive ? styles.active : ''}
        `}>
          <li style={{"--i": 1}}>
            <Link 
              to='/register' 
              onClick={() => setIsActive(false)}
            >
              CADASTRE-SE
            </Link>
          </li>
          <li style={{"--i": 2}}>
            <Link 
              to='/login'
              onClick={() => setIsActive(false)}
            >
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
