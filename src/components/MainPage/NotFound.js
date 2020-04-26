import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

function NotFound(props) {

    return (
        <Container fluid>
            <Header />
            <div>Not Found, Error 404</div>
            <Footer />
        </Container>
    )
}

export default NotFound;