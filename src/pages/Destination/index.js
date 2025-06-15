import { useEffect, useState } from 'react';
// dependencies
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
// styles
import styles from './Destination.module.css';
import './Destination.css';
// components
import ScrollToTop from 'components/ui/ScrollToTop';
// api
import { getDestinationById } from 'services/destinations';

const MAX_PHOTOS = 2;

const Destination = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [photos, setPhotos] = useState([]);

  const fetchDestination = async (id) => {
    try {
      const response = await getDestinationById(id);
      setDestination(response);
      setPhotos(response.photos || []);
    } catch (error) {
      console.error('Erro ao carregar destino: ', error.message);
    }
  }

  useEffect(() => {
    fetchDestination(id);
  }, [id]);

  if (!destination) {
    return <div>Destino não encontrado</div>
  }

  const bannerImage = photos[0]?.url || '';

  return(
    <article className={styles.destinationModelContainer}>
      <div 
        className={styles.banner}
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>
          {destination.target}
          {/* {destination.descriptiveText.title} */}
        </h1>

        <h2 className={styles.subtitle}>
          {destination.target}
          {/* {destination.descript iveText.subtitle} */}
        </h2>

        <ul className={styles.photoContainer}>
          {photos.slice(0, MAX_PHOTOS).map((photo, index) =>   
            <li 
              key={`photo-${photo.id || index}`}
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
            {destination.descriptiveText}
            {/* {destination.descriptiveText.text} */}
          </ReactMarkdown>
        </div>
      </div>

      <ScrollToTop />
    </article>
  )
}

export default Destination;
