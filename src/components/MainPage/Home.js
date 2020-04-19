import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header'
import Body from './Body';
import Magazine from './Magazine';
import EditorsPick from './EditorsPick';
import FeaturedSlideshows from './FeaturedSlideshows';
import Categories from './Categories';
import Subscribe from './Subscribe';
import Footer from './Footer';

function Home() {
    return (
        <Container fluid>
            <Header />
            <Body />
            <Magazine />
            <EditorsPick />
            <FeaturedSlideshows />
            <Categories />
            <Subscribe />
            <Footer />
        </Container>
    );
}

export default Home;
