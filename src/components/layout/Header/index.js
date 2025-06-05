import Navbar from 'components/layout/Navbar';
import LinkButton from 'components/ui/LinkButton';
import OutlinedLinkButton from 'components/ui/OutlinedLinkButton';

import logo from 'assets/white-logo1.png';

const Header = () => {
  return(
    <header>
        <Navbar
          logoImage={logo}
          logoDiscription='Jornada Milhas'
        >
        
          <LinkButton to='index.html'>
            CADASTRE-SE
          </LinkButton>
          
          <OutlinedLinkButton to='index.html'>
            LOGIN
          </OutlinedLinkButton>
      
      </ Navbar>
    </header>
  );
}

export default Header;
