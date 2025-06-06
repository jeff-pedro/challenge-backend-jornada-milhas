import Navbar from 'components/layout/Navbar';

import logo from 'assets/white-logo1.png'
import DefaultLinkButton from 'components/ui/DefaultLinkButton';

const Header = () => {
  return(
    <header>
        <Navbar
          logoImage={logo}
          logoDiscription='Jornada Milhas'
        >
        
        <DefaultLinkButton 
          to={'/register'}
        >
          CADASTRE-SE
        </DefaultLinkButton>

        <DefaultLinkButton 
          to={'/login'}
          outlined
        >
          LOGIN
        </DefaultLinkButton>
      </ Navbar>
    </header>
  );
}

export default Header;
