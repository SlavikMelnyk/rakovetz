import React from 'react';
import './home.scss';
import { Carousel } from 'react-bootstrap';
import img1 from './carousel-imgs/jpg-01-min.webp';
import img2 from './carousel-imgs/jpg-02-min.webp';
import img3 from './carousel-imgs/jpg-03-min.webp';
import img4 from './carousel-imgs/jpg-04-min.webp';
import img5 from './carousel-imgs/jpg-05-min.webp';
import img6 from './carousel-imgs/jpg-06-min.webp';
import img7 from './carousel-imgs/jpg-07-min.webp';
import img8 from './carousel-imgs/jpg-08-min.webp';
import img9 from './carousel-imgs/jpg-09-min.webp';

export default () => {
  return(
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="slide-1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="slide-2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="slide-3" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="slide-4" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img5} alt="slide-5" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img6} alt="slide-6" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img7} alt="slide-7" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img8} alt="slide-8" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img9} alt="slide-9" />
      </Carousel.Item>
    </Carousel>
  );
}