import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import data from '../../js/data.json';
import { Link } from 'react-router-dom';

function MoreIn(props) {
    const [category, setCategory] = useState([]);

    const categoryIn = props.post.category;

    useEffect(() => {
        const category = data.posts;
        setCategory(category);
    }, [])

    const filteredCategory = category.filter(item => item.category === categoryIn);

    const leftSide = filteredCategory.map((item, index) => {
        if (index > 5) return null;
        else
            return (
                <Col className="more-in-item" md={4} key={item.id} >
                    <article>
                        <Image src={require('./../../images' + item.image)} fluid />
                        <h4><Link to={'/' + item.category + '/' + item.id}>{item.title}</Link></h4>
                    </article>
                </Col>
            )
    })


    return (
        <>
            <p className="more-in-heading">More in {categoryIn}</p>
            <Row className="first-row">
                {leftSide}
            </Row>
        </>
    )
}

export default MoreIn;