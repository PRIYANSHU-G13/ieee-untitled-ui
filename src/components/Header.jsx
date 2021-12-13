import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MDBIcon } from "mdb-react-ui-kit";
import "../asset/css/Header.css";

function TitleBar() {
  return (
    <div className="main-header">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            <MDBIcon fas icon="camera-retro" /> Untitled UI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Products" id="collasible-nav-dropdown" className="dropdown-options">
                <NavDropdown.Item href="#action/2.1">Overview</NavDropdown.Item>
                <NavDropdown.Item href="#action/2.2">Features</NavDropdown.Item>
                <NavDropdown.Item href="#action/2.3">Solutions</NavDropdown.Item>
                <NavDropdown.Item href="#action/2.4">Tutorials</NavDropdown.Item>
                <NavDropdown.Item href="#action/2.5">Pricing</NavDropdown.Item>
                <NavDropdown.Item href="#action/2.6">Releases</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="collasible-nav-dropdown" className="dropdown-options">
                <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Newsletter</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Events</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Help Centre</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Tutorials</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Support</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TitleBar;
