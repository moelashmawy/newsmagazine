import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import data from '../../js/data.json';

function ShowCategory(props) {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const category = data.posts;
        setCategory(category);
    }, [])

    const filteredCategory = category.filter(item => item.category === props.category);
    const leftSide = filteredCategory.map((item, index) => {
        if (index > 1) return null;
        else
            return (
                <Col md={4} key={item.id} >
                    <article>
                        <Image src={require('./../../images' + item.image)} fluid />
                        <h4><a href="someUrl">{item.title}</a></h4>
                    </article>
                </Col>
            )
    })

    const rightSide = filteredCategory.map((item, index) => {
        if (index < 2 && index > 4) return null;
        else if (index > 1 && index < 5) {
            return (
                <div className="more-stories-item" key={item.id} data-aos="fade-up">
                    <div className="more-stories-item-img">
                        <a href="author">
                            <Image src={require('./../../images' + item.image)} fluid />
                        </a>
                    </div>
                    <div className="info">
                        <a href="someUrl">{item.title}</a>
                    </div>
                </div>
            )
        }
        else return null;
    })


    return (
        <>
            <div className="categories-heading">
                <a href="/us" className="ic1">{props.category}</a>
            </div>
            <Row className="first-row">
                {leftSide}
                <Col md={4}>
                    <div className="more-stories">
                        {rightSide}
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ShowCategory;