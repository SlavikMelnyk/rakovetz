import React from 'react';
import './home.scss';
import { Carousel } from 'react-bootstrap';
import img1 from './carousel-imgs/jpg-01.jpg';
import img2 from './carousel-imgs/jpg-02.jpg';
import img3 from './carousel-imgs/jpg-03.jpg';

export default () => {
  return(
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="slide-1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="slide-2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="slide-3" />
      </Carousel.Item>
    </Carousel>
  );
}