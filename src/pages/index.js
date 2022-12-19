import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';


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
    
    <Container fluid id="News">
      <Carousel interval={3000}>
        <Carousel.Item>
          <img className="d-block w-100" src="/generelmeeting.jpeg" alt="First slide"
              style={{width: '100%',  height : '90vh', objectFit:'cover'}}
          />
          <Carousel.Caption>
            <h3>GENERAL MEETING</h3>
            <h4>A lot of impportant decision were made in the first general meeting of the founders</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img fluid className="d-block w-100" src="/newclub.jpg" alt="First slide"
            style={{width: '100%',  height : '90vh', objectFit:'cover'}}
          />
          <Carousel.Caption>
            <h3>A NEW CLUB IN NRW</h3>
            <h4>One of our founder is a key figure in founding a new club in NRW</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img fluid className="d-block w-100" src="/practice.jpg" alt="First slide"
            style={{width: '100%',  height : '90vh', objectFit:'cover'}}
          />
          <Carousel.Caption>
              <h3>THE FIRST EVER PRACTICE</h3>
              <h4>Isar Tigers Munich cricket club has their first ever cricket match practice in ost park</h4>
          </Carousel.Caption>
          
        </Carousel.Item>
      
      </Carousel>
    </Container>
  </div>
