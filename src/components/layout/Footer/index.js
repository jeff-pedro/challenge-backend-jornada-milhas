import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__info">
        <img src="/images/white-logo2.png" alt="Jornada Milhas" />
        <p>Horário de atendimento: 08h - 20h (Segunda a Sábado)</p>
        <p>Desenvolvido por Jefferson Pedro. Projeto fictício sem fins comerciais.</p>
      </div>

      <div className="footer__social">
        <p>Acesse nossas redes:</p>
        <div className="footer__social_icons">
          <a className="social__whatsapp" href="whatsapp.com"><img src="/images/whatsapp.png" alt="WhatsApp" /></a>
          <a className="social__instagram" href="instragram.com"><img src="/images/instagram.png" alt="Instagram" /></a>
          <a className="social__twitter" href="twitter.com"><img src="/images/twitter.png" alt="Twiter" /></a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
