
export const ImageGalleryItem =({ images }) => {
  return (
    <li className="gallery-item">
      <img src={images.data.webformatURL } alt="" />
    </li>
  )
}
