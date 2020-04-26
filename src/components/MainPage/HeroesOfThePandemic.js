import React, { useState, useEffect } from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import data from '../../js/data.json';
import { Link } from 'react-router-dom';

function HeroesOfThePandemic(props) {
    const [pandemics, setPandemics] = useState([]);

    useEffect(() => {
        const pandemics = data.posts;
        setPandemics(pandemics);
    }, [])

    const pandemicItems = pandemics.map((item, index) => {
        if (index > 2) {
            return null;
        } else
            return (
                <Col xs={12} sm={4} key={item.id} data-aos="zoom-in">
                    <article className="culture-item">
                        <div className="wrap">
                            <div className="tags">
                                <Link to={'/topic/' + item.topics[0].name}>{item.topics[0].name}</Link>
                            </div>
                            <Image src={require('./../../images' + item.image)} fluid />
                        </div>
                        <h5><Link to={'/' + item.category + '/' + item.id}>{item.title}</Link></h5>
                        <div className="summary">{item.brief}</div>
                    </article>
                </Col>
            )
    })

    return (
        <div>
            <p className="category-name">Heroes of the Pandemic</p>
            <Row>
                {pandemicItems}
            </Row>
        </div>
    )
}

export default HeroesOfThePandemic;