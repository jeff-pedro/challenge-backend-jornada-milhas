import { Link, useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import notfound from 'assets/404-image.png';
import { RiArrowGoBackFill } from "react-icons/ri";

const NotFound  = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notfoundContainer}>

      <div className={styles.banner}>
      
        <div className={styles.bannerTextContainer}>
          <h1 className={styles.title}>
            Oops!
          </h1>

          <p className={styles.paragraph}>
            Você não deveria estar aqui.
          </p>      
        </div>

        <div className={styles.banner404Container}>
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
