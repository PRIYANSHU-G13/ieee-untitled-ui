import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { MDBIcon } from "mdb-react-ui-kit";
import "../asset/css/ContactSummary.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ContactSummary() {
  return (
      <div  className="outerArea">
    <Container>
      <Row>
        <Col lg={3} md={3} sm={6} xs={12}>
          <a className="navbar-brand" href="*">
            <MDBIcon fas icon="camera-retro" /> Untitled UI
          </a>
          <p>
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </Col>
        <Col lg={2} md={2} sm={3} xs={6}>
          <p>Product</p>
          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </Col>
        <Col lg={2} md={2} sm={3} xs={6}>
          <p>Company</p>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media Kit</li>
            <li>Contact</li>
          </ul>
        </Col>
        <Col lg={2} md={2} sm={3} xs={6}>
          <p>Resources</p>
          <ul>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help Centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </Col>
        <Col lg={2} md={2} sm={3} xs={6}>
          <p>Social</p>
          <ul>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </Col>
        <Col lg={1} md={1} sm={3} xs={6}>
          <p>Legal</p>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </Col>
      </Row>
    </Container>
     </div>
  );
}

export default ContactSummary;
