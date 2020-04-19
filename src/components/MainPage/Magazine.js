import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import data from './../../js/data.json';

function Magazine(props) {
    const [magazinePosts, setMagazinePosts] = useState([]);

    useEffect(() => {
        const magazinePosts = data.posts;
        setMagazinePosts(magazinePosts);
    }, [])

    const magazinePostsItems = magazinePosts.map((item, index) => {
        if (index > 7) return null;
        else
            return (
                <Col md={3} key={item.id} data-aos="zoom-in-up">
                    <article className="mag-article">
                        <div className="mag-article-img">
                            <a href="someUrl">
                                <Image src={require('./../../images' + item.image)} fluid />
                            </a>
                        </div>
                        <div className="mag-article-cat">
                            <span>COVER</span>
                            <a href="/us">{item.category}</a>
                        </div>
                        <h5><a href="someUrl">{item.title}</a></h5>
                    </article>
                </Col>
            )
    })


    return (
        <section className="magazine-body">
            <div className="magazine-heading">
                <span className="ic"></span>
                <span className="ic1">IN THE MAGAZINE</span>
            </div>
            <Row className="first-row">
                {magazinePostsItems}
            </Row>
        </section>
    )
}

export default Magazine;