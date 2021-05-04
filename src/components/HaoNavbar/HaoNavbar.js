import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function HaoNavbar(props) {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">HOA System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#/login">Login</Nav.Link>
            <Nav.Link href="#/signup">Signup</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>    
    );
}

export default HaoNavbar; 