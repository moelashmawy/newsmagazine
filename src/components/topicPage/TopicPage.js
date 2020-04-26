import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../mainPage/Header';
import Footer from '../mainPage/Footer';
import Pager from '../categoryPage/Pager';
import PostsFeed from './PostsFeed';

function TopicPage(props) {
    const topic = props.match.params.topic_name;

    return (
        <Container fluid className='topic-page'>
            <Header />
            <PostsFeed topic={topic} />
            <Pager />
            <Footer />
        </Container>
    )
}

export default TopicPage;