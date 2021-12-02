import React from 'react';
import './Navbar.css';
import { Navbar,Nav,Container} from 'react-bootstrap';
import logo from '../../../images/logo.png';


const NavBar = () => {
  return ( 
        <>    
  <Navbar bg="light" variant="light" expand = "lg">
    <Container fluid>
    <Navbar.Brand href="#home">
    <img className= "logo" src={logo} alt=""/>  
    </Navbar.Brand>
    <Nav className="ml-auto">
    <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/getTherapy">Get Therapy</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="/event-session">Event Session</Nav.Link>
      <Nav.Link href="/login">

      </Nav.Link>

    </Nav>
    </Container>
  </Navbar>
  </>
)
    };

    
export default NavBar;