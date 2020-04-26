import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Opinions from '../mainPage/Opinions';
import Debate from '../mainPage/Debate';
import { Link } from 'react-router-dom';

import SharePost from './SharePost';
import PostVideo from './PostVideo';
import PostTopics from './PostTopics';
import PostDetails from './PostDetails';
import PostImage from './PostImage';
import ReadMorePosts from './ReadMorePosts';


import EditorsPick from '../mainPage/EditorsPick';
import LatestNews from '../mainPage/LatestNews';
import MoreIn from './MoreIn';


function PostBody(props) {
    const { topics, imgUrl } = props;

    const [post, setPost] = useState({});

    useEffect(() => {
        const post = props.post;
        setPost(post);

    }, [imgUrl, props.post])

    return (
        <Container className='post-body' fluid>
            <Row>
                <Col md={8}>
                    <h4 className='post-category'><Link to={'/' + post.category}>{post.category}</Link></h4>

                    <h1 className="post-title">{post.title}</h1>

                    <div>
                        <div className='by-line'>
                            By
                            <span className='post-author'><Link to={'/author/' + post.author}>{' ' + post.author + ' '}</Link></span>
                            <span>ON {post.date} At {post.time}</span>
                        </div>

                        <PostVideo />

                        <SharePost />

                        <PostTopics topics={topics} post={post} />

                        <PostDetails post={post} />

                        <PostImage post={post} imgUrl={imgUrl} />

                        <ReadMorePosts post={post} />


                    </div>
                </Col>

                <Col md={4}>
                    <Opinions />
                    <Debate />
                </Col>
            </Row>

            <Row>
                <Col className='more-in' md={8}>
                    <MoreIn post={post} />
                </Col>

                <Col className='post-latest-news' md={4}>
                    <LatestNews />
                </Col>
            </Row>

            <Row>
                <EditorsPick />
            </Row>
        </Container>
    )
}

export default PostBody;