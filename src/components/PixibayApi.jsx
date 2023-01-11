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

  async componentDidMount() {
    console.log('propsPixy', this.props.searchData);
    const  response = await axios.get(`https://pixabay.com/api/?q=${this.props.searchData}&page=1&key=31487728-a23d010ad4dc914c660c439a4&image_type=photo&orientation=horizontal&per_page=12`)
    console.log('response', response.data.hits);

  }

  render() {
    console.log('propsPixyRender', this.props.searchData);
    return <div>j</div>
  }
}

  // async componentDidUpdate(prevProps, prevState, snapshot) {

    // if (prevProps.image !== this.props.image) {
    //    // console.log('изминили картинку');
    //
    //
    //   fetch( 'https://pixabay.com/api/?q=cat&page=1&key=31487728-a23d010ad4dc914c660c439a4&image_type=photo&orientation=horizontal&per_page=12')
    //     .then(response => {
    //       if (response.ok) {
    //         return response.json();
    //       }
    //       return Promise.reject(new Error('нет картинки')
    //       );
    //     })
    //     .then(picture => {
    //       this.setState({ picture })
    //       console.log('this.state.picture',this.state.picture.hits[0].id)
    //     })
    //
    //     .catch(error => this.setState({ error }))
    //     .finally(() => this.setState({loading: false}));
      // console.log('изминили картинку');
      // console.log('prevProps', prevProps.image);
      // console.log('this.props.image', this.props.image);
  //   }
  // }



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



// async componentDidMount() {
//   this.setState({loading: true});
//   try {
//     const data =  axios.get(
//       'https://pixabay.com/api/?q=cat&page=1&key=31487728-a23d010ad4dc914c660c439a4&image_type=photo&orientation=horizontal&per_page=12');
//     this.setState({images: data});
//   } catch (error) {
//     console.log(error);
//   }
//   this.setState({loading: false});
// };
