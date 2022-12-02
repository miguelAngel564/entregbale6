import React, { useState } from 'react';
import { Offcanvas } from "react-bootstrap";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Car from './Car';
import car from './Car'
//https://e-commerce-api.academlo.tech/api/v1/cart

const NAvBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand  to="/" as={Link} >PLAZA VEA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link as={Link} to="/product/:id" >product</Nav.Link> */}
              <Nav.Link as={Link} to="login" >LOGIN <i class="bi bi-person-circle"></i></Nav.Link>
              <Nav.Link as={Link} to="/purchases" >PURCHSES <i class="bi bi-bag-fill"></i></Nav.Link>
              <Nav.Link onClick={handleShow} >CART <i class="bi bi-cart-fill"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <Car show={show} handleClose={handleClose} />
      </>
    );
};

export default NAvBar;


// <Nav.Link as={Link} to="login" >login</Nav.Link>
// <Nav.Link as={Link} to="/purchases" >purchases</Nav.Link>
// <Nav.Link onClick={handleShow} >Cart</Nav.Link>