import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import ReactPlayer from 'react-player';
import promo from './promo.mp4';
import logo from '../header/logo-l.png';
import GoogleMap from './GoogleMap';

function useOnScreen(options) {
  const ref = React.useRef();
  const current = ref.current;
  const [visible, setVisible] = useState(false);
  useEffect(()=> {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);
    
    if(current) {
      observer.observe(current);
    }
    
    return () => {
      if(current) {
        observer.unobserve(current);
      }
    };
  }, [current, options]);
  
  return [ref, visible];
}

export default () => {
  const [ref, visible] = useOnScreen({ rootMargin: '-100px'});

  return(
    <div className='home-container'>
      <Carousel/>
      <div className='content-wrapper'>
        <img src={logo} alt='logo' />
        <p className='main-text'>Стомлені постійними стресами і темпами сучасного життя? Мрієте опинитися в оазисі природньої краси? Відпочинковий комплекс FOREST HOUSE RAKOVETZ - територія неймовірної природи. Тут розташовані три двохповерхові житлові котеджі, зведені в основному з хвойних порід дерев. Будинок в якому аромат свіжого лісу, допоможе зняти втому та отримати заряд бадьорості і приплив нових сил. Хороша САУНА з пахучими ефірними олійками та гарячий ЧАН тільки покращить ваші відчуння. Ландшафт території доповнюють два озера з різними призначеннями. В одному з них - місце для плавння,а в іншому - для риболовлі. Перелік послуг не є вичерпним, оскільки на території комплексу можна організувати будь-який захід.</p>
        <div ref={ref}>
          <ReactPlayer
            url={promo}
            playing={visible}
            loop
            controls
            width={window.innerWidth < 992 ? '100%' : '1024px'}
            height='auto'
            style={{margin: '60px auto'}}
          />
        </div>
        <hr/>
        <p className='location-text'>Forest House Rakovetz розташований в мальовничому селі Новосілка, вулиця Нова 4, поблизу села Раковець Пустомитівського району, Львівської області. По трасі Київ-Чоп (М-06) всього 15 км. від торгово-розважального комплексу King Cross Leopolis.
        <br/>Способи добирання:
        <br/><span className='tab'>-Таксі (приблизно 300 грн. від центру Львова, 100 грн. від King Cross Leopolis).</span>
        <br/><span className='tab'>-Автобуси, які їдуть в напрямку Стрия, Миколаєва, Нового Роздолу.</span>
        <br/>Населений пункт, в якому розташована відпочинкова база, славнозвісний своїм чудотворним джерелом розташованим між Новосілкою та Раковцем.</p>
        <GoogleMap />
  
      </div>
    </div>
  );
}
