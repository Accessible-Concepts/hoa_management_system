import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


function HaoNavbar({activeUser, onLogout, show}) {
    

    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#/">HOA System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {activeUser ? <Nav.Link href="#/dashboard">Dashboard</Nav.Link> : null}
            </Nav>
            <Nav className="ml-auto">
                {!activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null}
                {!activeUser ? <Nav.Link href="#/signup" >Signup</Nav.Link> : null}
                {activeUser ? <Nav.Link href="#/" onClick={() => onLogout()}>Logout</Nav.Link> : null}
            </Nav>
        </Navbar.Collapse>
        </Navbar>    
    );
}

export default HaoNavbar; 