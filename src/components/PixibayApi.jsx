import { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const ImageGalleryList = ({ images }) => (
  <ul>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <li key={id}>
        <img src={webformatURL} alt={webformatURL} />
      </li>
    ))}
  </ul>
);

export class PixabayApi extends Component {
  state ={
      images: [],

    // error: null,
    // status: 'idle',
  };

  // async componentDidMount() {
  //   console.log('propsPixy', this.props.searchData);
  //   const  response = await axios.get(`https://pixabay.com/api/?q=${this.props.searchData}&page=1&key=31487728-a23d010ad4dc914c660c439a4&image_type=photo&orientation=horizontal&per_page=12`)
  //   console.log('response', response.data.hits);
  //
  // }

  async componentDidUpdate(prevProps, prevState, snapshot) {

    if (prevProps.searchData !== this.props.searchData) {

      fetch( `https://pixabay.com/api/?q=${this.props.searchData}&page=1&key=31487728-a23d010ad4dc914c660c439a4&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error('нет картинки')
          );
        })
        .then(images => {
          this.setState({ images })
        })

        .catch(error => this.setState({ error }))
        .finally(() => this.setState({loading: false}));
    }
  }

  render() {
    console.log('this.state.images',this.state.images);
    return <div>хуй</div>
  }
}


//   render() {
//
//     return (
//       <div>
//         {/*{this.state.error && <div>{this.state.error.message}</div>}*/}
//         {/*{this.state.loading && <div>Loading....</div>}*/}
//         {/*{!this.props.image && <div>Введите ваш запрос поиска</div>}*/}
//         {/*{this.state.picture &&*/}
//         {/*  <div>*/}
//         {/*  <img src={this.state.picture } alt="" />*/}
//
//         {/*  </div>}*/}
//
//     </div>
//     );
//   }
// }
