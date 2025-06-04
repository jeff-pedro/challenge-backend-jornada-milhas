// dependencies
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'

// styles
import styles from './Destination.module.css';
import './Destination.css';

// API data
import { destinations } from 'data/destinations';

const Destination = () => {
  const params = useParams();

  const destination = destinations.find(destination => destination.id === params.id);
  
  // get only 2 photos
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

        {/* Markdown Text */}
        <div className="text">
          <ReactMarkdown>
            {destination.descriptiveText.text}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  )
}

export default Destination;
