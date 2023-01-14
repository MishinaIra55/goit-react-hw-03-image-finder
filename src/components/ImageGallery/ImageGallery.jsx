import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';
export  const ImageGallery =({ images }) => {

  return (
    <ul className={styles.ImageGallery}>
      { images.map(item => {
        return (
          <ImageGalleryItem key={item.id} image={item}/>
        )
      })}
    </ul>
  )
}
