/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import DropdownLarge from '../../dropdown/large';
import DropdownSmall from '../../dropdown/small';
import './styles.scss';

function menuEdega() {
    const [ openMenu, setOpenMenu] = useState(false);
    const [ openMenuSmall, setOpenMenuSmall] = useState(false);


    const onTop = () => {
       const topo = window.scrollTo(0, 0);
       return topo;
    }
  



return (
   <>
    <Navbar collapseOnSelect expand="lg" bg="white">
        <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link className="link-menu" onMouseEnter={() => setOpenMenu() || setOpenMenuSmall()}>Home</Nav.Link>
            <Nav.Link className={`link-menu ${openMenu ? 'active' : ''}`} onMouseEnter={() => setOpenMenu(true) || setOpenMenuSmall()} >Vinhos</Nav.Link>
            <div className="overlay"  style={{display: `${openMenu || openMenuSmall ? "block" : "none"}`}}></div>
            <div className="dropdown-content" style={{display: `${openMenu ? "block" : "none"}`}}>
                <DropdownLarge></DropdownLarge>
            </div>
            <Nav.Link className="link-menu" onMouseEnter={() => setOpenMenu() || setOpenMenuSmall(true)}>Contato</Nav.Link>
            <Nav.Link className="link-menu" onMouseEnter={() => setOpenMenu() || setOpenMenuSmall()}>Quem Somos</Nav.Link>
            <div className="dropdown-content small" style={{display: `${openMenuSmall ? "block" : "none"}`}}>
                <DropdownSmall></DropdownSmall>
            </div>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto mobile">
                <Nav.Link className="link-menu">Home</Nav.Link>
                <Nav.Link className="link-menu">Vinhos</Nav.Link>
                <Nav.Link className="link-menu">Contato</Nav.Link>
                <Nav.Link className="link-menu">Quem Somos</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    <button onClick={onTop} style={{position: 'absolute', right: '50%', top: '2000px'}} className="primary">Subir ao topo</button>
  </>
  );
}

export default menuEdega;