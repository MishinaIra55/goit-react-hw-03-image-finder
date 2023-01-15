
import styles from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ image: {id, webformatURL, largeImageURL }, modalitem, getUrl}) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={() => modalitem()} >
      <img className={styles['ImageGalleryItem-image']} src={webformatURL } alt="" onClick={()=> getUrl(largeImageURL)}/>
    </li>
  )
}

