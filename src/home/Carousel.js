import React from 'react';
import './home.scss';
import Img from 'react-image'
import { Carousel } from 'react-bootstrap';
import img1 from './carousel-imgs/jpg-01-min.jpg';
import img2 from './carousel-imgs/jpg-02-min.jpg';
import img3 from './carousel-imgs/jpg-03-min.jpg';

export default () => {
  return(
    <Carousel>
      <Carousel.Item>
        <Img className="d-block w-100" src={img1} alt="slide-1" />
      </Carousel.Item>
      <Carousel.Item>
        <Img className="d-block w-100" src={img2} alt="slide-2" />
      </Carousel.Item>
      <Carousel.Item>
        <Img className="d-block w-100" src={img3} alt="slide-3" />
      </Carousel.Item>
    </Carousel>
  );
}