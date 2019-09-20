import React from 'react';
import './home.scss';
import { Carousel } from 'react-bootstrap';

import img1m from './carousel-imgs/jpg-01-min.jpg';
import img2m from './carousel-imgs/jpg-02-min.jpg';
import img3m from './carousel-imgs/jpg-03-min.jpg';
import img4m from './carousel-imgs/jpg-04-min.jpg';
import img5m from './carousel-imgs/jpg-05-min.jpg';
import img6m from './carousel-imgs/jpg-06-min.jpg';
import img7m from './carousel-imgs/jpg-07-min.jpg';
import img8m from './carousel-imgs/jpg-08-min.jpg';
import img9m from './carousel-imgs/jpg-09-min.jpg';

import img1 from './carousel-imgs/jpg-01.jpg';
import img2 from './carousel-imgs/jpg-02.jpg';
import img3 from './carousel-imgs/jpg-03.jpg';
import img4 from './carousel-imgs/jpg-04.jpg';
import img5 from './carousel-imgs/jpg-05.jpg';
import img6 from './carousel-imgs/jpg-06.jpg';
import img7 from './carousel-imgs/jpg-07.jpg';
import img8 from './carousel-imgs/jpg-08.jpg';
import img9 from './carousel-imgs/jpg-09.jpg';

export default () => {
  return(
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={window.innerHeight >= 820 ? img1 : img1m} alt="slide-1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={window.innerHeight >= 820 ? img2 : img2m} alt="slide-2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={window.innerHeight >= 820 ? img3 : img3m} alt="slide-3" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={window.innerHeight >= 820 ? img4 : img4m} alt="slide-4" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={window.innerHeight >= 820 ? img5 : img5m} alt="slide-5" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={window.innerHeight >= 820 ? img6 : img6m} alt="slide-6" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={window.innerHeight >= 820 ? img7 : img7m} alt="slide-7" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={window.innerHeight >= 820 ? img8 : img8m} alt="slide-8" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={window.innerHeight >= 820 ? img9 : img9m} alt="slide-9" />
      </Carousel.Item>
    </Carousel>
  );
}