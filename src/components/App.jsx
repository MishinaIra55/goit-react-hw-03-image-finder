import React, { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';

import { ToastContainer } from 'react-toastify';

import { GalleryForm } from './GalleryForm';

// import { Modal } from './Modal/Modal';







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
  this.setState(({ showModal }) => ({
    showModal: !showModal,
    largeImage: '',
  }));
};



  render() {
    return (
      <>
        <Searchbar onSubmit ={this.handleSearchbar}/>
        <GalleryForm searchData={this.state.search}/>
        <ToastContainer autoClose={2000}/>
        {/*{showModal && (*/}
        {/*<Modal onClose={this.toggleModal}>*/}
        {/*   <div className="Close-box" onClick={this.toggleModal}>X*/}
        {/*      /!*<IconButton onClick={this.toggleModal} aria-label="Close modal">*!/*/}
        {/*      /!*  <CloseIcon width="20px" height="20px" fill="#7e7b7b" />*!/*/}
        {/*      /!*</IconButton>*!/*/}
        {/*    </div>*/}
        {/*  <img src={largeImage} alt="" className="Modal-image" />*/}
        {/*</Modal>*/}
        {/*)}*/}
      </>
    )
  }
  }

