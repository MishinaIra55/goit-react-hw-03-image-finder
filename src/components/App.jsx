import React, { Component } from 'react';
// import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { PixabayApi } from './PixibayApi';
import { ToastContainer } from 'react-toastify';

// import { ImageGallery } from './ImageGallery/ImageGallery';


export class App extends Component {

  state = {
    // огірки
    search: '',
  };

  handleSearchbar = search => {
    this.setState( { search });
  };



  render() {
    return (
      <div>
        <Searchbar onSubmit ={this.handleSearchbar}/>
        <PixabayApi searchData={this.state.search}/>
        <ToastContainer autoClose={2000}/>
      </div>
    )
  }
  }

