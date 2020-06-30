/* eslint-disable no-undef */
import React, {useState} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './styles.scss';

function HomePage() {
    const [hamburger, sethamburger] = useState('')
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
        <img style={{height: "60px", filter: "grayscale(1) brightness(2)"}} src="https://www.edega.com.br/assets/images/logo.png?v3" alt="" />
        </Navbar.Brand>
        <div className={`hamburger hamburger--3dx ${hamburger}`} onClick={() => hamburger === 'is-active' ? sethamburger('') : sethamburger('is-active') }>
            <div className="hamburger-box">
            <div className="hamburger-inner"></div>
            </div>
        </div> 
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link >Home</Nav.Link>
                <Nav.Link >Contato</Nav.Link>
                <Nav.Link >Quem Somos</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link>More deets</Nav.Link>
                <Nav.Link>More deets</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default HomePage;