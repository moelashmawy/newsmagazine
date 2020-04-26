import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../mainPage/Header';
import Footer from '../mainPage/Footer';
import data from './../../js/data.json';
import PostBody from './../postPage/PostBody'


function OpinionSinglePage(props) {
    const [post, setPost] = useState({});
    const [topics, setTopics] = useState([]);
    const [imgUrl, setImgUrl] = useState('/1.jpg');

    useEffect(() => {
        const posts = data.posts;
        const id = props.match.params.opinion_id - 1;
        const post = posts[id];
        setPost(post)
        const topics = post.topics;
        setTopics(topics);
        const imgUrl = post.image;
        setImgUrl(imgUrl);

    }, [props.match.params.opinion_id])

    return (
        <Container fluid className='post-single-page'>
            <Header />
            <PostBody post={post} topics={topics} imgUrl={imgUrl} />
            <Footer />
        </Container>
    )
}

export default OpinionSinglePage;