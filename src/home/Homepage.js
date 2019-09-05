import React from 'react';
import Carousel from './Carousel';
import ReactPlayer from 'react-player';
import promo from './promo.mp4';
import GoogleMap from './GoogleMap';
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer';

export default () => {
  return(
    <React.Fragment>
      <Carousel/>
      <div className='content-wrapper'>
      <ReactPlayer
        url={promo}
        playing={true}
        controls
        volume={0}
        width={window.innerWidth < 1000 ? '100%' : '50%'}
        height='auto'
      />
      <ObserverWrapper>
        <GoogleMap />
      </ObserverWrapper>
      </div>
    </React.Fragment>
  );
}
