import styles from './TestimonialCard.module.css';

const TestimonialCard = ({ text, author, image }) => {
  return(
      <div className={styles.testimonialCard}>
        <img src={image} alt={author} />
        <div className={styles.testimonialContent}>
          <p className={styles.testimonialText}>{text}</p>
          <p className={styles.testimonialAuthor}>{author}</p>
        </div>
      </div>
  );
}

export default TestimonialCard;
