import React from 'react';
import './header.scss';
import { Navbar, Nav } from 'react-bootstrap';

export default (props) => {
  return(
    <div className={!props.scrolled ? 'nav' : 'nav scrolled'}>
      <Navbar expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="link">Link</Nav.Link>
            <Nav.Link href="link1">Link1</Nav.Link>
            <Nav.Link href="link2">Link2</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}