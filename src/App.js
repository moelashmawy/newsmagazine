import React from 'react';
import './App.scss';
import Header from './components/Header';
import Body from './components/Body';
import Magazine from './components/Magazine';
import EditorsPick from './components/EditorsPick';
import FeaturedSlideshows from './components/FeaturedSlideshows';
import Categories from './components/Categories';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
