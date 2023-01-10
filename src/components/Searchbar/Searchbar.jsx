import { Component } from 'react';
import styles from './Searchbar.module.css';

import { ImSearch } from "react-icons/im";
export class Searchbar extends Component {

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm}>
          <input
            className={styles.searchForminput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
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

