import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeaderNews(props) {
    const { posts, category } = props;

    const filteredPosts = posts.filter(item => item.category === category);

    const storiesItems = filteredPosts.map((item, index) => {
        if (index > 2) {
            return null;
        } else
            return (
                <Col sm={12} md={4} key={item.id}>
                    <article>
                        <div className="wrap">
                            <Image src={require('./../../images' + item.image)} fluid />
                            <div className="category">
                                <Link to={`/${item.category}`}>{item.category}</Link>
                            </div>
                        </div>
                        <h4><Link to={'/' + item.category + '/' + item.id}>{item.title}</Link></h4>
                        <div className="summary">{item.brief}</div>
                    </article>
                </Col>
            )
    })

    return (
        <Row className='header-news'>
            {storiesItems}
        </Row>
    )
}

export default HeaderNews;