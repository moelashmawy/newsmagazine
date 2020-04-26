import React, { useState, useEffect } from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from './../../js/data.json';

function PostsFeed(props) {
    const { topic } = props;

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = data.posts;
        setPosts(posts);
    }, [])

    const filteredPosts = posts.filter((item, index) => item.topics.find(item => item.name === topic));

    const storiesItems = filteredPosts.map((item, index) => {
        if (index > 10) {
            return null;
        } else
            return (
                <Row className='header-news news-feed' key={item.id}>
                    <Col sm={12} md={12} key={item.id}>
                        <article className='header-news-small'>
                            <div className="wrap">
                                <Image src={require('./../../images' + item.image)} fluid />
                                <div className="category">
                                    <Link to={`/${item.category}`}>{item.category}</Link>
                                </div>
                            </div>
                            <div className='post-info'>
                                <h4><Link to={'/' + item.category + '/' + item.id}>{item.title}</Link></h4>
                                <div className="summary">{item.brief}</div>
                            </div>
                        </article>
                    </Col>
                </Row >
            )
    })

    return (
        <Container className='topic-page' fluid>
            {storiesItems}
        </Container>
    )
}

export default PostsFeed;