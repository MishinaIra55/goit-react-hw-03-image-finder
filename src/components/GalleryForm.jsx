import { Component } from 'react';


import ErrorData from './ErrorData/ErrorData';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import api from '../services/pixibay-api';
import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';

export class GalleryForm extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {

    if (prevProps.searchData !== this.props.searchData || prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });

      try {
        const response = await api.fetchAxiosGallery(this.props.searchData,this.state.page);
        this.setState(({images}) => {
          return {
            images: [...images, ...response.hits],
            status: 'idle'
          }
        });
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
    const { images, error, status, page } = this.state;

    if (status === 'idle' && images.length === 0) {
      return <div>Введите ваш запрос поиска</div>;
    }

    if (status === 'pending' && page === 1) {
      return <Loader/>
    }

    if (status === 'rejected') {
      return <ErrorData message={error} />;
    }
    //
    // if (images.length === 0) {
    //   return <div>Try again</div>
    // }

    return (<>
      <ImageGallery
        images={images}
        modalclick={this.props.openModal} getUrl={this.props.getUrl}
        status={status}
      />
      <Button load={this.onLoadMore} />
    </>)

  }
}





