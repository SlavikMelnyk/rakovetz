import React from 'react';
import './gallery.scss';
import ImageGallery from 'react-image-gallery';

import wimg1 from './imgs/winter/img-1.webp';
import wimg1t from './imgs/winter/img-1-thumb.jpg';
import wimg2 from './imgs/winter/img-2.webp';
import wimg2t from './imgs/winter/img-2-thumb.jpg';
import wimg3 from './imgs/winter/img-3.webp';
import wimg3t from './imgs/winter/img-3-thumb.jpg';
import wimg4 from './imgs/winter/img-4.webp';
import wimg4t from './imgs/winter/img-4-thumb.jpg';
import wimg5 from './imgs/winter/img-5.webp';
import wimg5t from './imgs/winter/img-5-thumb.jpg';
import wimg6 from './imgs/winter/img-6.webp';
import wimg6t from './imgs/winter/img-6-thumb.jpg';
import wimg7 from './imgs/winter/img-7.webp';
import wimg7t from './imgs/winter/img-7-thumb.jpg';
import wimg8 from './imgs/winter/img-8.webp';
import wimg8t from './imgs/winter/img-8-thumb.jpg';

import limg1 from './imgs/lake/img-1.webp';
import limg1t from './imgs/lake/img-1-thumb.jpg';
import limg2 from './imgs/lake/img-2.webp';
import limg2t from './imgs/lake/img-2-thumb.jpg';
import limg3 from './imgs/lake/img-3.webp';
import limg3t from './imgs/lake/img-3-thumb.jpg';
import limg4 from './imgs/lake/img-4.webp';
import limg4t from './imgs/lake/img-4-thumb.jpg';
import limg5 from './imgs/lake/img-5.webp';
import limg5t from './imgs/lake/img-5-thumb.jpg';
import limg6 from './imgs/lake/img-6.webp';
import limg6t from './imgs/lake/img-6-thumb.jpg';

import simg1 from './imgs/sauna/img-1.webp';
import simg1t from './imgs/sauna/img-1-thumb.jpg';
import simg2 from './imgs/sauna/img-2.webp';
import simg2t from './imgs/sauna/img-2-thumb.jpg';
import simg3 from './imgs/sauna/img-3.webp';
import simg3t from './imgs/sauna/img-3-thumb.jpg';
import simg4 from './imgs/sauna/img-4.webp';
import simg4t from './imgs/sauna/img-4-thumb.jpg';
import simg5 from './imgs/sauna/img-5.webp';
import simg5t from './imgs/sauna/img-5-thumb.jpg';

import lcimg1 from './imgs/location/img-1.webp';
import lcimg1t from './imgs/location/img-1-thumb.jpg';
import lcimg2 from './imgs/location/img-2.webp';
import lcimg2t from './imgs/location/img-2-thumb.jpg';
import lcimg3 from './imgs/location/img-3.webp';
import lcimg3t from './imgs/location/img-3-thumb.jpg';
import lcimg4 from './imgs/location/img-4.webp';
import lcimg4t from './imgs/location/img-4-thumb.jpg';
import lcimg5 from './imgs/location/img-5.webp';
import lcimg5t from './imgs/location/img-5-thumb.jpg';
import lcimg6 from './imgs/location/img-6.webp';
import lcimg6t from './imgs/location/img-6-thumb.jpg';
import lcimg9 from './imgs/location/img-9.webp';
import lcimg9t from './imgs/location/img-9-thumb.jpg';
import lcimg10 from './imgs/location/img-10.webp';
import lcimg10t from './imgs/location/img-10-thumb.jpg';

import mimg1 from './imgs/moments/img-1.webp';
import mimg1t from './imgs/moments/img-1-thumb.jpg';
import mimg2 from './imgs/moments/img-2.webp';
import mimg2t from './imgs/moments/img-2-thumb.jpg';
import mimg3 from './imgs/moments/img-3.webp';
import mimg3t from './imgs/moments/img-3-thumb.jpg';
import mimg4 from './imgs/moments/img-4.webp';
import mimg4t from './imgs/moments/img-4-thumb.jpg';
import mimg5 from './imgs/moments/img-5.webp';
import mimg5t from './imgs/moments/img-5-thumb.jpg';
import mimg6 from './imgs/moments/img-6.webp';
import mimg6t from './imgs/moments/img-6-thumb.jpg';
import mimg7 from './imgs/moments/img-7.webp';
import mimg7t from './imgs/moments/img-7-thumb.jpg';
import mimg8 from './imgs/moments/img-8.webp';
import mimg8t from './imgs/moments/img-8-thumb.jpg';
import mimg9 from './imgs/moments/img-9.webp';
import mimg9t from './imgs/moments/img-9-thumb.jpg';
import mimg10 from './imgs/moments/img-10.webp';
import mimg10t from './imgs/moments/img-10-thumb.jpg';
import mimg11 from './imgs/moments/img-11.webp';
import mimg11t from './imgs/moments/img-11-thumb.jpg';

import himg1 from './imgs/houses/img-1.webp';
import himg1t from './imgs/houses/img-1-thumb.jpg';
import himg2 from './imgs/houses/img-2.webp';
import himg2t from './imgs/houses/img-2-thumb.jpg';
import himg3 from './imgs/houses/img-3.webp';
import himg3t from './imgs/houses/img-3-thumb.jpg';
import himg4 from './imgs/houses/img-4.webp';
import himg4t from './imgs/houses/img-4-thumb.jpg';
import himg5 from './imgs/houses/img-5.webp';
import himg5t from './imgs/houses/img-5-thumb.jpg';
import himg6 from './imgs/houses/img-6.webp';
import himg6t from './imgs/houses/img-6-thumb.jpg';
import himg7 from './imgs/houses/img-7.webp';
import himg7t from './imgs/houses/img-7-thumb.jpg';
import himg8 from './imgs/houses/img-8.webp';
import himg8t from './imgs/houses/img-8-thumb.jpg';
import himg9 from './imgs/houses/img-9.webp';
import himg9t from './imgs/houses/img-9-thumb.jpg';
import himg10 from './imgs/houses/img-10.webp';
import himg10t from './imgs/houses/img-10-thumb.jpg';
import himg11 from './imgs/houses/img-11.webp';
import himg11t from './imgs/houses/img-11-thumb.jpg';
import himg12 from './imgs/houses/img-12.webp';
import himg12t from './imgs/houses/img-12-thumb.jpg';
import himg13 from './imgs/houses/img-13.webp';
import himg13t from './imgs/houses/img-13-thumb.jpg';
import himg14 from './imgs/houses/img-14.webp';
import himg14t from './imgs/houses/img-14-thumb.jpg';
import himg15 from './imgs/houses/img-15.webp';
import himg15t from './imgs/houses/img-15-thumb.jpg';
import himg16 from './imgs/houses/img-16.webp';
import himg16t from './imgs/houses/img-16-thumb.jpg';
import himg17 from './imgs/houses/img-17.webp';
import himg17t from './imgs/houses/img-17-thumb.jpg';
import himg18 from './imgs/houses/img-18.webp';
import himg18t from './imgs/houses/img-18-thumb.jpg';

export default (props) => {
  const winterImgs = [
    {
      original: wimg1,
      thumbnail: wimg1t,
    },
    {
      original: wimg2,
      thumbnail: wimg2t,
    },
    {
      original: wimg3,
      thumbnail: wimg3t,
    },
    {
      original: wimg4,
      thumbnail: wimg4t,
    },
    {
      original: wimg5,
      thumbnail: wimg5t,
    },
    {
      original: wimg6,
      thumbnail: wimg6t,
    },
    {
      original: wimg7,
      thumbnail: wimg7t,
    },
    {
      original: wimg8,
      thumbnail: wimg8t,
    },
  ];
  
  const lakeImgs = [
    {
      original: limg1,
      thumbnail: limg1t,
    },
    {
      original: limg2,
      thumbnail: limg2t,
    },
    {
      original: limg3,
      thumbnail: limg3t,
    },
    {
      original: limg4,
      thumbnail: limg4t,
    },
    {
      original: limg5,
      thumbnail: limg5t,
    },
    {
      original: limg6,
      thumbnail: limg6t,
    },
  ];
  
  const saunaImgs = [
    {
      original: simg1,
      thumbnail: simg1t,
    },
    {
      original: simg2,
      thumbnail: simg2t,
    },
    {
      original: simg3,
      thumbnail: simg3t,
    },
    {
      original: simg4,
      thumbnail: simg4t,
    },
    {
      original: simg5,
      thumbnail: simg5t,
    },
  ];
  
  const locationImgs = [
    {
      original: lcimg1,
      thumbnail: lcimg1t,
    },
    {
      original: lcimg2,
      thumbnail: lcimg2t,
    },
    {
      original: lcimg3,
      thumbnail: lcimg3t,
    },
    {
      original: lcimg4,
      thumbnail: lcimg4t,
    },
    {
      original: lcimg5,
      thumbnail: lcimg5t,
    },
    {
      original: lcimg6,
      thumbnail: lcimg6t,
    },
    {
      original: lcimg9,
      thumbnail: lcimg9t,
    },
    {
      original: lcimg10,
      thumbnail: lcimg10t,
    },
  ];
  
  const momentsImgs = [
    {
      original: mimg1,
      thumbnail: mimg1t,
    },
    {
      original: mimg2,
      thumbnail: mimg2t,
    },
    {
      original: mimg3,
      thumbnail: mimg3t,
    },
    {
      original: mimg4,
      thumbnail: mimg4t,
    },
    {
      original: mimg5,
      thumbnail: mimg5t,
    },
    {
      original: mimg6,
      thumbnail: mimg6t,
    },
    {
      original: mimg7,
      thumbnail: mimg7t,
    },
    {
      original: mimg8,
      thumbnail: mimg8t,
    },
    {
      original: mimg9,
      thumbnail: mimg9t,
    },
    {
      original: mimg10,
      thumbnail: mimg10t,
    },
    {
      original: mimg11,
      thumbnail: mimg11t,
    },
  ];
  
  const housesImgs = [
    {
      original: himg1,
      thumbnail: himg1t,
    },
    {
      original: himg2,
      thumbnail: himg2t,
    },
    {
      original: himg3,
      thumbnail: himg3t,
    },
    {
      original: himg4,
      thumbnail: himg4t,
    },
    {
      original: himg5,
      thumbnail: himg5t,
    },
    {
      original: himg6,
      thumbnail: himg6t,
    },
    {
      original: himg7,
      thumbnail: himg7t,
    },
    {
      original: himg8,
      thumbnail: himg8t,
    },
    {
      original: himg9,
      thumbnail: himg9t,
    },
    {
      original: himg10,
      thumbnail: himg10t,
    },
    {
      original: himg11,
      thumbnail: himg11t,
    },
    {
      original: himg12,
      thumbnail: himg12t,
    },
    {
      original: himg13,
      thumbnail: himg13t,
    },
    {
      original: himg14,
      thumbnail: himg14t,
    },
    {
      original: himg15,
      thumbnail: himg15t,
    },
    {
      original: himg16,
      thumbnail: himg16t,
    },
    {
      original: himg17,
      thumbnail: himg17t,
    },
    {
      original: himg18,
      thumbnail: himg18t,
    },
  ];

  return (
    <div className='img-gallery-container'>
      <div className='mini-gallery left-aligned'>
        <ImageGallery items={housesImgs} />
        <div className='gallery-info'>
          <h2>Котеджі</h2>
        </div>
      </div>
      <div className='mini-gallery right-aligned'>
        <div className='gallery-info'>
          <h2>Сауна/Чан</h2>
        </div>
        <ImageGallery items={saunaImgs} />
      </div>
      <div className='mini-gallery left-aligned'>
        <ImageGallery items={lakeImgs} />
        <div className='gallery-info'>
          <h2>Альтанка на озері</h2>
        </div>
      </div>
      <div className='mini-gallery right-aligned'>
        <div className='gallery-info'>
          <h2>Локація</h2>
        </div>
        <ImageGallery items={locationImgs} />
      </div>
      <div className='mini-gallery left-aligned'>
        <ImageGallery items={momentsImgs} />
        <div className='gallery-info'>
          <h2>Моменти</h2>
        </div>
      </div>
      <div className='mini-gallery right-aligned'>
        <div className='gallery-info'>
          <h2>Зима</h2>
        </div>
        <ImageGallery items={winterImgs} />
      </div>
    </div>
  );
}