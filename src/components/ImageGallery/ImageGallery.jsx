import { getPictures } from 'components/getPictures';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
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
      this.setState({ loading: true, page: 1, pictures: null });
      setTimeout(
        () =>
          getPictures(this.props.name, this.state.page)
            .then(response => response.json())
            .then(pictures => {
              setTimeout(() => console.log(this.state.pictures), 500);
              this.setState({ pictures });
            })
            .finally(() => {
              this.setState({ loading: false });
            }),
        500
      );
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
    if (this.state.page <= 41) {
      console.log(this.state.page);
      this.setState(prevState => {
        return { page: prevState.page + 1 };
      });
      setTimeout(() => this.loadMore(), 200);
    }
  };
  render() {
    return (
      <div>
        {this.state.loading && <Loader />}
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
