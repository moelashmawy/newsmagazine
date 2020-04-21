import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import data from '../../js/data.json';
import { Link } from 'react-router-dom';

function Header(props) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categories = data.categories;
        setCategories(categories);
    }, []);

    const navItem = categories.map(item => {
        return (
            <Nav.Link as={Link} to={`/${item.name}`} key={item.id}>{item.displayName}</Nav.Link>
        )
    })


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
                    <Link to="/">NewsMagazine</Link>
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
                        {navItem}
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