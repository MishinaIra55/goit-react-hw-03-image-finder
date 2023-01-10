import { Component } from 'react';
import axios, { get } from 'axios';


export class App extends Component {
  state: {
    images: null,
  }

  async componentDidMount() {
    try {
      const data =  axios.get('https://pixabay.com/api/?q=cat&page=1&key=31487728-a23d010ad4dc914c660c439a4&image_type=photo&orientation=horizontal&per_page=12');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <>
      </>
    )
  }
};
