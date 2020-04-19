import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import cover1 from './../../images/april-03-2020-cover.jpg';
import cover2 from './../../images/cover-april-10-2020.jpg';
import newsletter from './../../images/starting5-homepage.png';

function Subscribe(props) {
    return (
        <section className="subscribe-body">
            <Row>
                <Col lg={8} className="subscribe-col">
                    <div className="subscribe-body-heading">SUBSCRIBE</div>
                    <Row className="subscribe">
                        <Col md={4} className="left-side">
                            <div className="imgs">
                                <Image src={cover1} fluid />
                                <Image src={cover2} fluid />
                            </div>
                        </Col>
                        <Col md={8} xs={12} className="right-side">
                            <h4>In-depth Stories You Don't See Elsewhere About Topics You Want to Read!</h4>
                            <p>
                                All Access + Weekly Delivery.
                            <br />
                            Choose A Membership That's Perfect for You!
                            </p>
                            <a href="subscribe" className="signup-1b">SUBSCRIBE</a>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4}>
                    <div className="subscribe-body-heading">NEWSLETTER</div>
                    <div className="news-letter">
                        <div className="left-side">
                            <Image src={newsletter} fluid />
                        </div>
                        <div className="right-side">
                            <h4>The Starting 5</h4>
                            <p>
                                See why nearly a quarter of a million subscribers begin their day with the Starting 5.
                            </p>
                            <a className="signup-1b" href="signup">SIGN UP</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Subscribe;