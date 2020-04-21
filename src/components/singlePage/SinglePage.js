import React, { useState, useEffect } from 'react';
import { Image, Container } from 'react-bootstrap';
import Header from './../mainPage/Header';
import Footer from './../mainPage/Footer';
import data from './../../js/data.json';


function SinglePage(props) {
    const [post, setPost] = useState([]);

    useEffect(() => {
        let id = props.match.params.post_id - 1;
        let posts = data.posts;
        let post = posts[id];
        setPost(post)

    }, [props.match.params.post_id])

    return (
        <Container fluid>
            <Header />
            <div>{post.id}</div>
            <div>{post.category}</div>
            <div>{post.title}</div>
            <div>{post.brief}</div>
            <div>{post.image}</div>
            <Footer />
        </Container>
    )
}

export default SinglePage;