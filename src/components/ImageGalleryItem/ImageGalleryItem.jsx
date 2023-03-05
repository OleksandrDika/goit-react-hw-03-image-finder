import React from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item }) => {
  return (
    <GalleryItem>
      <Image src={item.webformatURL} alt="" />
    </GalleryItem>
  );
};
