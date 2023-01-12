import { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

// const ImageGalleryList = ({ images }) => (
//   <ul>
//     {images.map(({ id, webformatURL, largeImageURL }) => (
//       <li key={id}>
//         <img src={webformatURL} alt={webformatURL} />
//       </li>
//     ))}
//   </ul>
// );

export class PixabayApi extends Component {
  state = {
    images: [],

    error: null,
    status: 'idle',
  };


  async componentDidUpdate(prevProps, prevState, snapshot) {

    if (prevProps.searchData !== this.props.searchData) {

      this.setState({ status: 'pending' });

      fetch(`https://pixabay.com/api/?q=${this.props.searchData}&page=1&key=31487728-a23d010ad4dc914c660c439a4&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`нет картинки ${this.props.searchData}`),
          );
        })
        .then(images => {
          this.setState({ images: images.hits, status: 'resolved'})

        })

        .catch(error => this.setState({ error, status: 'rejected' }))



    }
  }

  render() {

    const { images, error, status } = this.state;

    // console.log('state.length', this.state.images.length);
    // console.log('state', this.state.images);

    if (status === 'idle') {
      return <div>Введите ваш запрос поиска</div>
    }

    if (status === 'pending') {
      return <div>Loading....</div>
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>
    }

    if (status === 'resolved') {
      return <p>{images[0].id}</p>
    }
  }
}
    // return (
    //
    //   <div>
    //     {error && <h1>{error.message}</h1>}
    //     {loading && <div>Loading....</div>}
    //     {!searchData && <div>Введите ваш запрос поиска</div>}
    //     {images.length > 0 &&
    //       <div>
    //         <p>{images[0].id}</p>
    //
    //         </div>}
    //     {/*{this.state.images.length > 0 && <ImageGalley images={this.state.images}/>}*/}
    //   </div>
    // )





