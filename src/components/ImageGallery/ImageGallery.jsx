import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
export  const ImageGallery =({ images }) => {

  return (
    <ul className="gallery">
      { images.map(item => {
        return (
          <ImageGalleryItem key={item.id} image={item}/>
        )
      })}
    </ul>
  )
}
