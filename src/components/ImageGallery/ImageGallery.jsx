import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';
import { Loader } from '../Loader/Loader';
export  const ImageGallery = ({ images, modalclick}) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        { images.map(item => {
          return (
            <ImageGalleryItem key={item.id} image={item} modalitem={modalclick}/>
          )
        })}
      </ul>
    </>
  )
}
