import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'

function Subscribe(props) {
    return (
        <section className="subscribe-body">
            <Row>
                <Col lg={8} className="subscribe-col">
                    <div className="subscribe-body-heading">SUBSCRIBE</div>
                    <Row className="subscribe">
                        <Col md={4} className="left-side">
                            <div className="imgs">
                                <Image src="https://d.newsweek.com/en/full/1576902/april-03-2020-cover.jpg" fluid />
                                <Image src="https://d.newsweek.com/en/full/1577760/cover-april-10-2020.jpg" fluid />
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
                            <Image src="https://d.newsweek.com/en/full/1541302/starting5-homepage.png" fluid />
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