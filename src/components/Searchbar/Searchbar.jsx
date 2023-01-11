import { Component } from 'react';
import styles from './Searchbar.module.css';

import { ImSearch } from "react-icons/im";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class Searchbar extends Component {
  state = {
    search: '',
  };

  //меняю состояние с inputa
  handleSearch = event => {
    this.setState( {search: event.currentTarget.value.toLowerCase()});
  };

  handleSubmit = event => {
    event.preventDefault();

    //проверка чтобы не отправлять форму пустую
    if (this.state.search.trim() === '') {
      toast.error('Введите ваш запрос');
      return;
    }

    this.props.onSubmit(this.state.search);
    this.setState({ search: ''});//вызов props s app
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
            value={this.state.search}
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

