import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../mainPage/Header';
import Footer from '../mainPage/Footer';
import CategoryPageBody from './CategoryPageBody';

function CategoryPage(props) {
    const category = props.match.params.category;
    console.log(props);

    return (
        <Container fluid>
            <Header />
            <CategoryPageBody category={category} />
            <Footer />
        </Container>
    )
}

export default CategoryPage;