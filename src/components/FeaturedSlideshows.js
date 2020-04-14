import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'

function FeaturedSlideshows(props) {
    return (
        <section className="featured-slides-body">
            <div className="featured-slides-heading">
                <span className="ic"></span>
                <span className="ic1">FEATURED SLIDESHOWS</span>
            </div>
            <Row className="first-row">
                <Col md={4}>
                    <article>
                        <div className="wrap">
                            <div className="category">
                                <a href="/us">11</a>
                            </div>
                            <Image src="https://d.newsweek.com/en/full/1560097/tozeur-tunisia.webp" fluid />
                        </div>
                        <h4><a href="#">Relive the 'Star Wars' Saga at These Filming Locations </a></h4>
                    </article>
                </Col>
                <Col md={4}>
                    <article>
                        <div className="wrap">
                            <div className="category">
                                <a href="/us">25</a>
                            </div>
                            <Image src="https://d.newsweek.com/en/full/1552749/eyjafjallajokull-iceland.webp" fluid />
                        </div>
                        <h4><a href="#">Active Volcanoes Around the World That Could Erupt at Any Moment</a></h4>
                    </article>
                </Col>
                <Col md={4}>
                    <article>
                        <div className="wrap">
                            <div className="category">
                                <a href="/us">18</a>
                            </div>
                            <Image src="https://d.newsweek.com/en/full/1547486/lipschutz-living-room-hotel-chelsea.webp" fluid />
                        </div>
                        <h4><a href="#">Inside the Last Bohemian Apartments of the Storied Hotel Chelsea </a></h4>
                    </article>
                </Col>
            </Row>
        </section>
    )
}

export default FeaturedSlideshows;