import React from 'react';
import Carousel from './Carousel';
import ReactPlayer from 'react-player';
import promo from './promo.mp4';
import GoogleMap from './GoogleMap';


export default () => {
  return(
    <React.Fragment>
      <Carousel/>
      <div className='content-wrapper'>
        <ReactPlayer url={promo} playing={true} controls volume={0} width='50%' height='auto' />
        <GoogleMap />
      </div>
    </React.Fragment>
  );
}
