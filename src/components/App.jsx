import { Component } from 'react';
// import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';

// import { ImageGallery } from './ImageGallery/ImageGallery';


export class App extends Component {

  state = {
    image: '',
  };

  handleSearchbar = image => {
    this.setState( { image });
  };

  // async componentDidMount() {
  //   this.setState({loading: true});
  //   try {
  //     const data =  axios.get(
  //       'https://pixabay.com/api/?q=cat&page=1&key=31487728-a23d010ad4dc914c660c439a4&image_type=photo&orientation=horizontal&per_page=12');
  //     this.setState({images: data});
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   this.setState({loading: false});
  // };

  render() {
    return (
      <div>
      <Searchbar onSubmit ={this.handleSearchbar}/>
      </div>
    )
  }
  }

