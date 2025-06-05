import styles from './BannerBottom.module.css';
import banner from 'assets/banner-homepage-bottom.png';

const BannerBottom = () => {
  return (
    <div 
      className={styles.bannerBottom}
      style={{ backgroundImage: `url(${banner})` }}
    ></div>
  );
}

export default BannerBottom;