import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../MainPage/Header';
import Footer from '../MainPage/Footer';
import CategoryPageBody from '../pages/CategoryPageBody';

function CategoryPage(props) {
    return (
        <Container fluid>
            <Header />
            <CategoryPageBody category={props.category} />
            <Footer />
        </Container>
    )
}

export default CategoryPage;