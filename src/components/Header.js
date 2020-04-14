import React from 'react';
import { Container, Row, Col, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    return (
        <Container fluid>
            <Row className="header">
                <Col xs={2} lg={3} className="header-left">
                    <img className="weather-icon" src="https://g.newsweek.com/img/weather/33.png" alt="weather"></img>
                    <span className="weather">23° <span className="header-city">Cairo, EG</span></span>
                    <img className="weather-arrow" src="https://g.newsweek.com/img/weather/ic-white-arrow.png" alt="weather-arrow"></img>
                    <p className="header-date">Fri, Apr 03, 2020</p>
                </Col>
                <Col xs={4} lg={6} className="logo">
                    <a href="home">NewsMagazine</a>
                </Col>
                <Col xs={6} lg={3} className="header-right">
                    <a className="header-signin" href="signin">SIGN IN</a>
                    <a className="subscribe" href="subscribe"> SUBSCRIBE > </a>
                </Col>
            </Row>

            <Navbar sticky="top" className="main-navbar" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">U.S.</Nav.Link>
                        <Nav.Link href="#link">World</Nav.Link>
                        <Nav.Link href="#link">Business</Nav.Link>
                        <Nav.Link href="#link">Tech &amp; Science</Nav.Link>
                        <Nav.Link href="#link">Culture</Nav.Link>
                        <Nav.Link href="#link">Newsgeek</Nav.Link>
                        <Nav.Link href="#link">Sports</Nav.Link>
                        <Nav.Link href="#link">Health</Nav.Link>
                        <Nav.Link href="#link">The Debate</Nav.Link>
                        <Nav.Link href="#link">Vantage</Nav.Link>
                        <Nav.Link href="#link">Weather</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button className="search-button" variant="outline-success"><FontAwesomeIcon icon={faSearch} /></Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default Header;