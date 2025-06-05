import styles from './Footer.module.css';
// images
import whataspp from 'assets/whatsapp.png';
import instragram from 'assets/instagram.png';
import twitter from 'assets/twitter.png';
import logo from 'assets/white-logo2.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerInfo}>
        <img src={logo} alt="Jornada Milhas" />
        
        <p>
          Horário de atendimento: 08h - 20h (Segunda a Sábado)
        </p>

        <p>
          Desenvolvido por Jefferson Pedro. Projeto fictício sem fins comerciais.
        </p>
      </div>

      <div className={styles.footerSocial}>
        <p>Acesse nossas redes:</p>
        
        <div className={styles.footerSocialIcons}>
          <a className={styles.socialWhatsapp} href="whatsapp.com">
              <img src={whataspp} alt="WhatsApp" />
          </a>
        
          <a className={styles.socialInstagram} href="instragram.com">
            <img src={instragram} alt="Instagram" />
          </a>
        
          <a className={styles.socialTwitter} href="twitter.com">
            <img src={twitter} alt="Twiter" />
          </a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
