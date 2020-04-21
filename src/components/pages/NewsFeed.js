import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NewsFeed(props) {
    const { posts, category, postsNo } = props;

    const filteredPosts = posts.filter(item => item.category === category);

    const storiesItems = filteredPosts.map((item, index) => {
        if (index > postsNo) {
            return null;
        } else
            return (
                <Row className='header-news news-feed' data-aos="fade-up" data-aos-duration="1500" key={item.id}>
                    <Col sm={12} md={12} key={item.id}>
                        <article className='header-news-small'>
                            <div className="wrap">
                                <Image src={require('./../../images' + item.image)} fluid />
                                <div className="category">
                                    <Link to={`/${item.category}`}>{item.category}</Link>
                                </div>
                            </div>
                            <div>
                                <h4><Link to={'/' + item.category + '/' + item.id}>{item.title}</Link></h4>
                                <div className="summary">{item.brief}</div>
                            </div>
                        </article>
                    </Col>
                </Row >
            )
    })

    return (
        <>
            {storiesItems}
        </>
    )
}

export default NewsFeed;