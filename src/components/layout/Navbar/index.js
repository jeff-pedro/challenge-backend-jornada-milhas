import './Navbar.css';

const Navbar = ({ children, logoImage, logoDiscription }) => {
  return(
    <header>
      <nav className="navbar">
        <img src={logoImage} alt={logoDiscription} />
        <div className="navbar__buttons">
          { children }
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
