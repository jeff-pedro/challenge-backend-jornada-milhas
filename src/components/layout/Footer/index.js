import styles from './Footer.module.css';
// images
import whataspp from 'assets/whatsapp.png';
import instragram from 'assets/instagram.png';
import twitter from 'assets/twitter.png';
import logo from 'assets/white-logo2.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <img className={styles.logo} src={logo} alt='Jornada Milhas' />

      <div className={styles.infoContainer}>
        <p className={styles.info}>
          Horário de atendimento: 08h - 20h (Segunda a Sábado)
        </p>

        <p className={styles.info}>
          Desenvolvido por Jefferson Pedro. Projeto fictício sem fins comerciais.
        </p>
      </div>


      <div className={styles.footerSocial}>
        <p className={styles.footerSocialParagraph}>Acesse nossas redes:</p>
        
        <div className={styles.footerSocialIcons}>
          <a 
            className={styles.socialWhatsapp} 
            target='_blank'
            rel='noopener noreferrer'
            href='https://wa.me/+5511912345678'
          >
              <img src={whataspp} alt='WhatsApp' />
          </a>
        
          <a 
            className={styles.socialInstagram}
            target='_blank'
            rel='noopener noreferrer'
            href='https://instagram.com'
          >
            <img src={instragram} alt='Instagram' />
          </a>
        
          <a 
            className={styles.socialTwitter}
            target='_blank'
            rel='noopener noreferrer'
            href='https://x.com'
          >
            <img src={twitter} alt='Twiter' />
          </a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
