import { Component } from 'react';
import axios from 'axios';

import ErrorData from './ErrorData/ErrorData';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';


axios.defaults.baseURL = 'https://pixabay.com/api/';


export class PixabayApi extends Component {
  state = {
    images: [],
    isEmpty: null,
    error: null,
    status: 'idle',
  };


  async componentDidUpdate(prevProps, prevState, snapshot) {

    if (prevProps.searchData !== this.props.searchData) {

      this.setState({ status: 'pending', isEmpty: null });

      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${this.props.searchData}&page=1&key=31487728-a23d010ad4dc914c660c439a4&image_type=photo&orientation=horizontal&per_page=12`);
        this.setState({ images: response.data.hits, status: 'resolved' });
        if(response.data.hits.length === 0 ) {
          this.setState({ isEmpty: 'Response is empty. You can try again'});
        }

      } catch (error) {
        this.setState({ error: `нет картинки ${this.props.searchData}`, status: 'rejected' });
      }
    }
  }

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <div>Введите ваш запрос поиска</div>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <ErrorData message={error} />;
    }

    if (status === 'resolved') {
      return <ImageGallery images={images} />;
    }
  }
}





