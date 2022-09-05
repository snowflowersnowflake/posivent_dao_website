import * as React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'gatsby';

const NaviBar = ({ title }) => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Link to="/"><Navbar.Brand><img src={title} alt="Logo"></img></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Link to="/about"><Nav.Link href="/about">ABOUT</Nav.Link></Link>
            <Link to="/ecosystem"><Nav.Link href="/ecosystem">ECOSYSTEM</Nav.Link></Link>
            <Link to="/careers"><Nav.Link href="/careers">CAREERS</Nav.Link></Link>
            <Link to="/contact"><Nav.Link href="/contact">CONTACT</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NaviBar
