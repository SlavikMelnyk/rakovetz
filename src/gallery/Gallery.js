import React from 'react';
import './gallery.scss';
import ImageGallery from 'react-image-gallery';

import img from './imgs/jpg-01-min.jpg';

export default (props) => {
  const images = [
    {
      original: img,
      thumbnail: img,
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

    return (
      <div className='img-gallery-container'>
        <div className='left-aligned'><ImageGallery items={images} /></div>
        <div className='right-aligned'><ImageGallery items={images} /></div>
        <div className='left-aligned'><ImageGallery items={images} /></div>
        <div className='right-aligned'><ImageGallery items={images} /></div>
      </div>
    );
}