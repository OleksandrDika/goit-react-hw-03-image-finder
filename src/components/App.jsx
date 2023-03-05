import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    value: '',
    showModal: true,
  };
  handleSubmit = value => {
    this.setState({ value });
  };
  render() {
    return (
      <div>
        <Searchbar onSearch={this.handleSubmit} />
        <ImageGallery name={this.state.value} />

        <GlobalStyle />
      </div>
    );
  }
}
