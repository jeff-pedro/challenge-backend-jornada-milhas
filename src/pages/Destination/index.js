import styles from './Destination.module.css';

// API data
import { destinations } from 'data/destinations';

const Destination = () => {
  const destination = destinations[0]; // change to route url params 
  
  const photosUrl = destination.photos.slice(0, 2);

  return(
    <article className={styles.destinationModelContainer}>
      <div 
        className={styles.banner}
        style={{ backgroundImage  : `url(${photosUrl[0].url})`}}
      ></div>

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>
          {destination.descriptiveText.title}
        </h1>

        <h2 className={styles.subtitle}>
          {destination.descriptiveText.subtitle}
        </h2>

        <ul className={styles.photoContainer}>
          {photosUrl.map(photo => 
            <li 
              key={photo.id}
              className={styles.photoItem}
            >
              <img 
                src={photo.url} 
                alt={photo.description} 
                className={styles.photo}
              />
            </li>
          )}
        </ul>

        <p className={styles.text}>
          {destination.descriptiveText.text}
        </p>
      </div>
    </article>
  )
}

export default Destination;
