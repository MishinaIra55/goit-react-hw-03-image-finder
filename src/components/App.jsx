import React, { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';

import { ToastContainer } from 'react-toastify';

import { GalleryForm } from './GalleryForm';




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
      </div>
    )
  }
  }

