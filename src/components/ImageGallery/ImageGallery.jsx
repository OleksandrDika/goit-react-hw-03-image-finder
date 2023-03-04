import { getPictures } from 'components/getPictures';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    pictures: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      console.log(this.props.name);
      getPictures(this.props.name)
        .then(response => response.json())
        .then(pictures => {
          this.setState({ pictures });
        });
    }
  }
  render() {
    return (
      <Gallery>
        {this.state.pictures &&
          this.state.pictures.hits.map(item => {
            // console.log(item);
            return <ImageGalleryItem item={item} />;
          })}
      </Gallery>
    );
  }
}
