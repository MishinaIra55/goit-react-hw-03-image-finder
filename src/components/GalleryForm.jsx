import { Component } from 'react';


import ErrorData from './ErrorData/ErrorData';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import api from '../services/pixibay-api';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class GalleryForm extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1
  };


  async componentDidUpdate(prevProps, prevState, snapshot) {

    if (prevProps.searchData !== this.props.searchData || prevState.page !== this.state.page) {
      console.log('prevState.page', prevState.page);
      this.setState({ status: 'pending' });

      try {
        const response = await api.fetchAxiosGallery(this.props.searchData);
        this.setState({ images: response.hits, status: 'resolved' });
      } catch (error) {
        this.setState({ error: `нет картинки ${this.props.searchData}`, status: 'rejected' });
      }
    }
  }

  onLoadMore =() => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
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

    if (images.length === 0) {
      return <div>Try again</div>
    }

    if (status === 'resolved') {
      return <>
        <ImageGallery images={images} />,
        <Button load={this.onLoadMore}/>
      </>

    }

  }
}





