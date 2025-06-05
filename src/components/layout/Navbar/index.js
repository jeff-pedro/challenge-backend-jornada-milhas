import styles from './Navbar.module.css';

const Navbar = ({ children, logoImage, logoDiscription }) => {
  return(
    <header>
      <nav className={styles.navbar}>
        <img src={logoImage} alt={logoDiscription} />
        
        <div className={styles.navbarButtons}>
          { children }
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
