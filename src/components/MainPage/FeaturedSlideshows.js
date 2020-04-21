import React, { useEffect, useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import data from '../../js/data.json';
import { Link } from 'react-router-dom';


function FeaturedSlideshows(props) {
    const [featuredSlideshows, setFeaturedSlideshows] = useState([]);

    useEffect(() => {
        const featuredSlideshows = data.posts;
        setFeaturedSlideshows(featuredSlideshows);
    }, [])

    const featuredSlideshowsItems = featuredSlideshows.map((item, index) => {
        if (index > 2) return null;
        else
            return (
                <Col md={4} key={item.id} data-aos="flip-right">
                    <article>
                        <div className="wrap">
                            <div className="category">
                                <Link to={'/' + item.category + '/' + item.id}>11</Link>
                            </div>
                            <Image src={require('./../../images' + item.image)} fluid />
                        </div>
                        <h4><Link to={'/' + item.category + '/' + item.id}>{item.title}</Link></h4>
                    </article>
                </Col>
            )
    })

    return (
        <section className="featured-slides-body">
            <div className="featured-slides-heading">
                <span className="ic"></span>
                <span className="ic1">FEATURED SLIDESHOWS</span>
            </div>
            <Row className="first-row">
                {featuredSlideshowsItems}
            </Row>
        </section>
    )
}

export default FeaturedSlideshows;