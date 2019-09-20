import React from 'react';
import './gallery.scss';

import wimg1 from './imgs/winter/img-1.webp';
import wimg2 from './imgs/winter/img-2.webp';
import wimg3 from './imgs/winter/img-3.webp';
import wimg4 from './imgs/winter/img-4.webp';
import wimg5 from './imgs/winter/img-5.webp';
import wimg6 from './imgs/winter/img-6.webp';
import wimg7 from './imgs/winter/img-7.webp';
import wimg8 from './imgs/winter/img-8.webp';

import limg1 from './imgs/lake/img-1.webp';
import limg2 from './imgs/lake/img-2.webp';
import limg3 from './imgs/lake/img-3.webp';
import limg4 from './imgs/lake/img-4.webp';
import limg5 from './imgs/lake/img-5.webp';
import limg6 from './imgs/lake/img-6.webp';

import simg1 from './imgs/sauna/img-1.webp';
import simg2 from './imgs/sauna/img-2.webp';
import simg3 from './imgs/sauna/img-3.webp';
import simg4 from './imgs/sauna/img-4.webp';
import simg5 from './imgs/sauna/img-5.webp';

import lcimg1 from './imgs/location/img-1.webp';
import lcimg2 from './imgs/location/img-2.webp';
import lcimg3 from './imgs/location/img-3.webp';
import lcimg4 from './imgs/location/img-4.webp';
import lcimg5 from './imgs/location/img-5.webp';
import lcimg6 from './imgs/location/img-6.webp';
import lcimg9 from './imgs/location/img-9.webp';
import lcimg10 from './imgs/location/img-10.webp';

import mimg1 from './imgs/moments/img-1.webp';
import mimg2 from './imgs/moments/img-2.webp';
import mimg3 from './imgs/moments/img-3.webp';
import mimg4 from './imgs/moments/img-4.webp';
import mimg5 from './imgs/moments/img-5.webp';
import mimg6 from './imgs/moments/img-6.webp';
import mimg7 from './imgs/moments/img-7.webp';
import mimg8 from './imgs/moments/img-8.webp';
import mimg9 from './imgs/moments/img-9.webp';
import mimg10 from './imgs/moments/img-10.webp';
import mimg11 from './imgs/moments/img-11.webp';
import mimg12 from './imgs/moments/img-12.webp';
import mimg13 from './imgs/moments/img-13.webp';
import mimg14 from './imgs/moments/img-14.webp';
import mimg15 from './imgs/moments/img-15.webp';
import mimg16 from './imgs/moments/img-16.webp';
import mimg17 from './imgs/moments/img-17.webp';
import mimg18 from './imgs/moments/img-18.webp';

import himg1 from './imgs/houses/img-1.webp';
import himg2 from './imgs/houses/img-2.webp';
import himg3 from './imgs/houses/img-3.webp';
import himg4 from './imgs/houses/img-4.webp';
import himg5 from './imgs/houses/img-5.webp';
import himg6 from './imgs/houses/img-6.webp';
import himg7 from './imgs/houses/img-7.webp';
import himg8 from './imgs/houses/img-8.webp';
import himg9 from './imgs/houses/img-9.webp';
import himg10 from './imgs/houses/img-10.webp';
import himg11 from './imgs/houses/img-11.webp';
import himg12 from './imgs/houses/img-12.webp';
import himg13 from './imgs/houses/img-13.webp';
import himg14 from './imgs/houses/img-14.webp';
import himg15 from './imgs/houses/img-15.webp';
import himg16 from './imgs/houses/img-16.webp';
import himg17 from './imgs/houses/img-17.webp';
import himg18 from './imgs/houses/img-18.webp';

export default (props) => {
  
  React.useEffect(() => {
    const targets = document.getElementsByClassName('img-gallery-container')[0].querySelectorAll('img');
    
    const lazyLoad = target => {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            const img = entry.target;
            const src = window.innerHeight <= 768 ? img.getAttribute('data-lazy-min') : img.getAttribute('data-lazy');
            img.setAttribute('src', src);
            img.classList.add('fade');
            
            observer.disconnect();
          }
        })
      }, { rootMargin: '-100px'})
      io.observe(target);
    };
    
    targets.forEach(lazyLoad);
  }, []);
  
  return (
    <React.Fragment>
      <div className='gallery-container'>
        <h1>Галерея</h1>
        <div className='img-gallery-container'>
          <div className='images'>
            <a name="houses" /> {/* eslint-disable-line */}
            <h2>Котеджі:</h2>
            <img data-lazy={himg1} alt='himg1' />
            <img data-lazy={himg2} alt='himg2' />
            <img data-lazy={himg3} alt='himg3' />
            <img data-lazy={himg4} alt='himg4' />
            <img data-lazy={himg5} alt='himg5' />
            <img data-lazy={himg6} alt='himg6' />
            <img data-lazy={himg7} alt='himg7' />
            <img data-lazy={himg8} alt='himg8' />
            <img data-lazy={himg9} alt='himg9' />
            <img data-lazy={himg10} alt='himg10' />
            <img data-lazy={himg11} alt='himg11' />
            <img data-lazy={himg12} alt='himg12' />
            <img data-lazy={himg13} alt='himg13' />
            <img data-lazy={himg14} alt='himg14' />
            <img data-lazy={himg15} alt='himg15' />
            <img data-lazy={himg16} alt='himg16' />
            <img data-lazy={himg17} alt='himg17' />
            <img data-lazy={himg18} alt='himg18' />
          </div>
          <div className='images'>
            <a name="sauna" /> {/* eslint-disable-line */}
            <h2>Сауна/Чан:</h2>
            <img data-lazy={simg1} alt='simg1' />
            <img data-lazy={simg2} alt='simg2' />
            <img data-lazy={simg3} alt='simg3' />
            <img data-lazy={simg4} alt='simg4' />
            <img data-lazy={simg5} alt='simg5' />
          </div>
          <div className='images'>
            <a name="lake" /> {/* eslint-disable-line */}
            <h2>Альтанка на озері:</h2>
            <img data-lazy={limg1} alt='limg1' />
            <img data-lazy={limg2} alt='limg2' />
            <img data-lazy={limg3} alt='limg3' />
            <img data-lazy={limg4} alt='limg4' />
            <img data-lazy={limg5} alt='limg5' />
            <img data-lazy={limg6} alt='limg6' />
          </div>
          <div className='images'>
            <a name="location" /> {/* eslint-disable-line */}
            <h2>Локація:</h2>
            <img data-lazy={lcimg1} alt='lcimg1' />
            <img data-lazy={lcimg2} alt='lcimg2' />
            <img data-lazy={lcimg3} alt='lcimg3' />
            <img data-lazy={lcimg4} alt='lcimg4' />
            <img data-lazy={lcimg5} alt='lcimg5' />
            <img data-lazy={lcimg6} alt='lcimg6' />
            <img data-lazy={lcimg9} alt='lcimg9' />
            <img data-lazy={lcimg10} alt='lcimg10' />
          </div>
          <div className='images'>
            <a name="moments" /> {/* eslint-disable-line */}
            <h2>Моменти:</h2>
            <img data-lazy={mimg1} alt='mimg1' />
            <img data-lazy={mimg2} alt='mimg2' />
            <img data-lazy={mimg3} alt='mimg3' />
            <img data-lazy={mimg4} alt='mimg4' />
            <img data-lazy={mimg5} alt='mimg5' />
            <img data-lazy={mimg6} alt='mimg6' />
            <img data-lazy={mimg7} alt='mimg7' />
            <img data-lazy={mimg8} alt='mimg8' />
            <img data-lazy={mimg9} alt='mimg9' />
            <img data-lazy={mimg10} alt='mimg10' />
            <img data-lazy={mimg11} alt='mimg11' />
            <img data-lazy={mimg12} alt='mimg12' />
            <img data-lazy={mimg13} alt='mimg13' />
            <img data-lazy={mimg14} alt='mimg14' />
            <img data-lazy={mimg15} alt='mimg15' />
            <img data-lazy={mimg16} alt='mimg16' />
            <img data-lazy={mimg17} alt='mimg17' />
            <img data-lazy={mimg18} alt='mimg18' />
          </div>
          <div className='images'>
            <a name="winter" /> {/* eslint-disable-line */}
            <h2>Зима:</h2>
            <img data-lazy={wimg1} alt='wimg1' />
            <img data-lazy={wimg2} alt='wimg2' />
            <img data-lazy={wimg3} alt='wimg3' />
            <img data-lazy={wimg4} alt='wimg4' />
            <img data-lazy={wimg5} alt='wimg5' />
            <img data-lazy={wimg6} alt='wimg6' />
            <img data-lazy={wimg7} alt='wimg7' />
            <img data-lazy={wimg8} alt='wimg8' />
          </div>
        </div>
      </div>
      <div className='inner-nav'>
        <a href="#houses">Котеджі</a>
        <a href="#sauna">Сауна</a>
        <a href="#lake">Озеро</a>
        <a href="#location">Локація</a>
        <a href="#moments">Моменти</a>
        <a href="#winter">Зима</a>
      </div>
    </React.Fragment>
  );
}