import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from './header/Header';
import Homepage from './home/Homepage';
import { Route, BrowserRouter as Router } from 'react-router-dom';

export default () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      setScrolled(!isTop);
    })
  }, []);

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <Header scrolled={scrolled} />
      <Router>
        <Route path='/' exact component={Homepage} />
        <Route path='/link' render={() => <h2>LINK</h2>} />
      </Router>
    </div>
  );
}
