import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from './header/Header';
import Gallery from './gallery/Gallery';
import Homepage from './home/Homepage';
import { Helmet } from 'react-helmet';
import { Route, BrowserRouter as Router } from 'react-router-dom';

export default () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      setScrolled(!isTop);
    });
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>Forest House Rakovetz</title>
        <meta name="description" content="Forest House Rakovetz" />
      </Helmet>
      <Router>
        <Header scrolled={scrolled} />
        <Route path='/' exact component={Homepage} />
        <Route path='/gallery' component={Gallery} />
      </Router>
    </div>
  );
}
