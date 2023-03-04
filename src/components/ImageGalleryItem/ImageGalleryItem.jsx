import React from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item }) => {
  return (
    <GalleryItem key={item.id}>
      <Image src={item.webformatURL} alt="" />
    </GalleryItem>
  );
};
