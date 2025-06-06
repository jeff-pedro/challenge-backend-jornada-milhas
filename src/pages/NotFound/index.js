import { Link, useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import notfound from 'assets/404-image.png';
import { RiArrowGoBackFill } from "react-icons/ri";

const NotFound  = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notfoundContainer}>

      <div className={styles.banner}>
        <h1 className={styles.titulo}>
          Oops!
        </h1>

        <p className={styles.paragrafo}>
          Você não deveria estar aqui.
        </p>      

        <div className={styles.bannerContainer}>
          <span className={styles.text404}>
            404
          </span>
          
          <img 
            className={styles.image404} 
            src={notfound} 
            alt='Shipwrecked man with buoy' 
          />
        </div>
      </div>

      <div 
        className={styles.backLinkContainer}
        onClick={() => navigate(-1)}
      >
        <Link className={styles.backLink}>
          <RiArrowGoBackFill style={{ marginRight: '0.5rem' }}/>
          Voltar
        </Link>
      </div>

      <div className={styles.whiteSpace}></div>
    </div>
  );
}

export default NotFound;
