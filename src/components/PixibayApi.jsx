import { Component } from 'react';
import axios from 'axios';

import ErrorData from './ErrorData/ErrorData';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';


axios.defaults.baseURL = 'https://pixabay.com/api/';


export class PixabayApi extends Component {
  state = {
    images: [],

    error: null,
    status: 'idle',
  };


  componentDidUpdate(prevProps, prevState, snapshot) {

    if (prevProps.searchData !== this.props.searchData) {

      this.setState({ status: 'pending' });

      // fetch(`https://pixaba.com/api/?q=${this.props.searchData}&page=1&key=31487728-a23d010ad4dc914c660c439a4&image_type=photo&orientation=horizontal&per_page=12`)
      //   .then(response => {
      //     if (response.ok) {
      //       return response.json();
      //     }
      //     return Promise.reject(
      //       // new Error(`нет картинки ${this.props.searchData}`)
      //     );
      //   })
      //   .then(images => {
      //     this.setState({ images: images.hits, status: 'resolved' });
      //   })
      //   .catch(error => this.setState({ error, status: 'rejected' })
      // );
    }
  }

  render() {
    const { images, error, status } = this.state;
    console.log('error', error);

    if (status === 'idle') {
      return <div>Введите ваш запрос поиска</div>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <ErrorData message={error.message} />;
    }

    if (status === 'resolved') {
      return <ImageGallery images={images} />;
    }
  }
}





