import { Component } from 'react';
import styles from './Searchbar.module.css';

import { ImSearch } from "react-icons/im";
export class Searchbar extends Component {
  state = {
    image: '',
  };

  //меняю состояние с inputa
  handleSearch = event => {
    this.setState( {image: event.currentTarget.value.toLowerCase()});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearchbar(this.state.image); //вызов props s app
}
  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <input
            className={styles.searchForminput}
            type="text"
            // autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.image}
            onChange={this.handleSearch}

          />

          <button type="submit" className={styles.searchFormbutton}>
            <span className={styles.searchFormbuttonlabel}>Search</span>
            <ImSearch/>
          </button>

        </form>
      </header>
    );
  }
}

