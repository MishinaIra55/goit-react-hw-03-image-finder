import React, { Component } from 'react';
// import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';

import { ToastContainer } from 'react-toastify';
import { Button } from './Button/Button';
import { GalleryForm } from './GalleryForm';

// import { ImageGallery } from './ImageGallery/ImageGallery';


export class App extends Component {

  state = {
    search: '',
  };

  handleSearchbar = search => {
    this.setState( { search });
  };



  render() {
    return (
      <div>
        <Searchbar onSubmit ={this.handleSearchbar}/>
        <GalleryForm searchData={this.state.search}/>
        <ToastContainer autoClose={2000}/>
        <Button/>
      </div>
    )
  }
  }

