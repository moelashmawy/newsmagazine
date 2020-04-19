import React, { useState, useEffect } from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import data from './../../js/data.json';

function CultureTravel(props) {
    const [culturePosts, setculturePosts] = useState([]);

    useEffect(() => {
        const culturePosts = data.posts;
        setculturePosts(culturePosts);
    }, [])

    const cultureCateogryItems = culturePosts.filter(item => item.category === 'culture')
    const cultureItems = cultureCateogryItems.map((item, index) => {
        if (index > 2) {
            return null;
        } else
            return (
                <Col xs={12} sm={4} key={item.id} data-aos="zoom-in">
                    <article className="culture-item">
                        <div className="wrap">
                            <div className="tags">
                                <a href="/business">{item.topics[0].name}</a>
                            </div>
                            <Image src={require('./../../images' + item.image)} fluid />
                        </div>
                        <h5><a href="someUrl">{item.title}</a></h5>
                        <div className="summary">{item.brief}</div>
                    </article>
                </Col>
            )
    })

    return (
        <div>
            <p className="category-name">Culture &amp; Travel</p>
            <Row>
                {cultureItems}
            </Row>
        </div>
    )
}

export default CultureTravel;