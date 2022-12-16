import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default () =>
  <div>
    <Navbar expand="lg" style={{ backgroundColor: '#016a54'}}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#fixtures">FIXTURES & RESULTS</Nav.Link>
            <Nav.Link href="#news">NEWS</Nav.Link>
            <Nav.Link href="#players">PLAYERS</Nav.Link>
            <Nav.Link href="#sponsors">SPONSORS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
      Hello world!
    </Container>
  </div>
