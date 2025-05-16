import Navbar from '../Navbar';
import LinkButton from '../../ui/LinkButton';
import OutlinedLinkButton from '../../ui/OutlinedLinkButton';

const Header = () => {
  return(
    <header>
        <Navbar
          logoImage='/images/white-logo1.png'
          logoDiscription='Jornada Milhas'
        >
        <LinkButton to='index.html'>CADASTRE-SE</LinkButton>
        <OutlinedLinkButton to='index.html'>LOGIN</OutlinedLinkButton>
      </ Navbar>
    </header>
  );
}

export default Header;
