import { getPictures } from 'components/getPictures';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { LoadMore } from 'components/LoadMore/LoadMore';

import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    pictures: null,
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      // console.log(this.props.name);
      getPictures(this.props.name, this.state.page)
        .then(response => response.json())
        .then(pictures => {
          setTimeout(() => console.log(this.state.pictures), 1000);
          this.setState({ pictures });
        });
    }
  }

  loadMore = () => {
    getPictures(this.props.name, this.state.page)
      .then(response => response.json())
      .then(newObj => {
        this.setState(prevState => {
          // console.log(prevState.pictures);
          // console.log(pictures);
          return { pictures: { ...prevState.pictures, ...newObj } };
        });
      });
  };

  handleClick = e => {
    console.log('rrrr');
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    this.loadMore();
  };
  render() {
    return (
      <div>
        <Gallery>
          {this.state.pictures &&
            this.state.pictures.hits.map(item => {
              // console.log(this.state.pictures);
              return <ImageGalleryItem key={item.id} item={item} />;
            })}
        </Gallery>
        {this.state.pictures && (
          <LoadMore handleClick={this.handleClick} type="button" />
        )}
      </div>
    );
  }
}
