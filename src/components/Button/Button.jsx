import { Component } from 'react';


export class Button extends Component {
  state = {
    page: 1,
  }

  onLoadMore =() => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  // componentDidMount(_, prevState) {
  //   if (prevState.page !== this.state.page) {
  //     console.log('fffff');
  //   }
  // }

  render() {
    return (
      <button onClick={this.state.onLoadMore}>Load more</button>
    )

  }
}

