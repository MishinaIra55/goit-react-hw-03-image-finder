
import styles from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ image: {id, webformatURL, largeImageURL }}) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img className={styles['ImageGalleryItem-image']} src={webformatURL } alt="" />
    </li>
  )
}

