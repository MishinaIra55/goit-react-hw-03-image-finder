import React, { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';

import { ToastContainer } from 'react-toastify';

import { GalleryForm } from './GalleryForm';

import { Modal } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';







export class App extends Component {

  state = {
    search: '',
    showModal: false,
    largeImage: ''

  };

  handleSearchbar = search => {
    this.setState( { search });
  };

  //переключение модалки
  toggleModal = () => {
    this.setState((state) => (
        {
          showModal: !state.showModal
        }
      )
    )
};

  getLargeImage = (imageURL) => {
  this.setState((state) => (
    {
      largeImage: imageURL
    }
    )

  )
}

  render() {
    return (
      <>
        <Searchbar onSubmit ={this.handleSearchbar}/>
        <GalleryForm searchData={this.state.search} openModal={this.toggleModal} getUrl={this.getLargeImage}/>
        <ToastContainer autoClose={2000}/>

        {this.state.showModal && (
        <Modal onClose={this.toggleModal}>
          <img src='#' alt="" className="Modal-image" />
        </Modal>
        )}
      </>
    )
  }
  }

