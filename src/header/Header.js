import React from 'react';
import './header.scss';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo-m.png';
import insta from './instagram.png';
import fb from './facebook.png';
import phone from './phone.png';
import gmail from './gmail.png';
import booking from './booking.png';

export default (props) => {
  return(
    <div className={!props.scrolled ? 'nav' : 'nav scrolled'}>
      <Link to='/'><img src={logo} alt='logo' /></Link>
      <p className='contact-area'>
        <img className='contact-item' src={phone} alt='phone-icon' /><span>068 597 1463</span>
        <img className='contact-item' src={phone} alt='phone-icon' /><span>068 597 1473</span>
        <a
          className='contact-item'
          href='mailto: forest.house.rakovetz@gmail.com'>
          <img src={gmail} alt='gmail-icon' />
        </a><span>forest.house.rakovetz@gmail.com</span>
        <a
          className='contact-item'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.facebook.com/Forest.House.Rakovetz/'>
          <img src={fb} alt='fb-icon' />
        </a>
        <a
          className='contact-item'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.instagram.com/forest_house_rakovetz/'>
          <img src={insta} alt='insta-icon' />
        </a>
        <a
          className='contact-item'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.booking.com/hotel/ua/forest-house-rakovets.uk.html'>
          <img className='booking-icon' src={booking} alt='booking-icon' />
        </a>
      </p>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to='/'><Nav.Link href="/">Home</Nav.Link></Link>
            <Link to='link'><Nav.Link href="link">Link</Nav.Link></Link>
            <Link to='link1'><Nav.Link href="link1">Link1</Nav.Link></Link>
            <Link to='link2'><Nav.Link href="link2">Link2</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}