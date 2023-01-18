import { Component } from 'react';


import ErrorData from './ErrorData/ErrorData';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import {fetchAxiosGallery} from '../services/pixibay-api';

import styles from './GalleryForm.module.css';
import PropTypes from 'prop-types';


export class GalleryForm extends Component {
  state = {
    images: [],
    error: '',
    status: 'idle',
    page: 1
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {
    // if (prevProps.searchData !== this.props.searchData || prevState.page !== this.state.page) {
    //   this.setState({
    //        images: [],
    //          page: 1
    //        })
    // }



    if (prevProps.searchData !== this.props.searchData || prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });


      try {
        const response = await fetchAxiosGallery(this.props.searchData,this.state.page);
        this.setState(({images}) => {
          return {
            images: [...images, ...response.hits],
            status: 'idle'
          }
        });

        if (response.hits.length === 0) {
          throw  new SyntaxError('Try again, the search is not correct');
        }


      } catch (error) {
        this.setState({ error: `нет картинки ${this.props.searchData}`, status: 'rejected' });
      }
    }
  }

  // handleReset = ()=> {
  //   this.setState({
  //     images: [],
  //     page: 1
  //   })
  // };

  onLoadMore =() => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  render() {
    const { images, error, status, page } = this.state;

    if (status === 'idle' && images.length === 0) {
      return <div className={styles.text}>Введите ваш запрос поиска</div>;
    }

    // if ( images.length === 0) {
    //   return <div className={styles.text}>Try again, the search is not correct</div>
    // }

    if (status === 'pending' && page === 1) {
      return <Loader/>
    }

    if (status === 'rejected') {
      return <ErrorData message={ error} /> ;
    }

    return (<>
      <ImageGallery
        images={images}
        modalclick={this.props.openModal}
        getUrl={this.props.getUrl}
        status={status}
        load={this.onLoadMore}
      />
    </>)

  }
}

GalleryForm.propTypes = {
  searchData: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  getUrl: PropTypes.func.isRequired,
}



