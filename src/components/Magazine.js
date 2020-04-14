import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'

function Magazine(props) {
    return (
        <section className="magazine-body">
            <div className="magazine-heading">
                <span className="ic"></span>
                <span className="ic1">IN THE MAGAZINE</span>
            </div>
            <Row className="first-row">
                <Col md={3}>
                    <article className="featured">
                        <div className="wrap">
                            <div className="category">
                                <a href="/us">APRIL 10 ISSUES</a>
                            </div>
                            <Image src="https://d.newsweek.com/en/full/1577760/cover-april-10-2020.webp" fluid />
                        </div>
                        <a className="mag-featured" href="#">SEE ALL FEATURES</a>
                    </article>
                </Col>
                <Col md={3}>
                    <article className="mag-article">
                        <div className="mag-article-img">
                            <a href="#"><Image src="https://d.newsweek.com/en/full/1577311/remote-work-04.webp" fluid /></a>
                        </div>
                        <div className="mag-article-cat">
                            <span>COVER</span>
                            <a href="/us">BUSINESS</a>
                        </div>
                        <h5><a href="#">The Coronavirus Will Change How We Work Forever</a></h5>
                    </article>
                </Col>
                <Col md={3}>
                    <article className="mag-article">
                        <div className="mag-article-img">
                            <a href="#"><Image src="https://d.newsweek.com/en/full/1575814/us-unemployment-jobs-economy-recession-coronavirus.webp" fluid /></a>
                        </div>
                        <div className="mag-article-cat">
                            <span>FEATURE</span>
                            <a href="/us">BUSINESS</a>
                        </div>
                        <h5><a href="#">As Jobless Claims Surge, Here Are 7 Things To Do If You Lose Your Job</a></h5>
                    </article>
                </Col>
                <Col md={3}>
                    <article className="mag-article">
                        <div className="mag-article-img">
                            <a href="#"><Image src="https://d.newsweek.com/en/full/1573813/us-president-donald-trump.webp" fluid /></a>
                        </div>
                        <div className="mag-article-cat">
                            <span>Periscope</span>
                            <a href="/us">U.S.</a>
                        </div>
                        <h5><a href="#">Exclusive: Inside the Military's Secret Plans If Coronavirus Cripples D.C.</a></h5>
                    </article>
                </Col>
            </Row>

            <Row className="second-row">
                <Col md={3}>
                    <article className="mag-article">
                        <div className="mag-article-img">
                            <a href="#"><Image src="https://d.newsweek.com/en/full/1577399/culture-hollywood-01.webp" fluid /></a>
                        </div>
                        <div className="mag-article-cat">
                            <span>Periscope</span>
                            <a href="/us">U.S.</a>
                        </div>
                        <h5><a href="#">Exclusive: Inside the Military's Secret Plans If Coronavirus Cripples D.C.</a></h5>
                    </article>
                </Col>
                <Col md={3}>
                    <article className="mag-article">
                        <div className="mag-article-img">
                            <a href="#"><Image src="https://d.newsweek.com/en/full/1577620/cul-uncharted-movies-banner.webp" fluid /></a>
                        </div>
                        <div className="mag-article-cat">
                            <span>COVER</span>
                            <a href="/us">BUSINESS</a>
                        </div>
                        <h5><a href="#">The Coronavirus Will Change How We Work Forever</a></h5>
                    </article>
                </Col>
                <Col md={3}>
                    <article className="mag-article">
                        <div className="mag-article-img">
                            <a href="#"><Image src="https://d.newsweek.com/en/full/1576924/cul-ps-reedus.webp" fluid /></a>
                        </div>
                        <div className="mag-article-cat">
                            <span>FEATURE</span>
                            <a href="/us">BUSINESS</a>
                        </div>
                        <h5><a href="#">As Jobless Claims Surge, Here Are 7 Things To Do If You Lose Your Job</a></h5>
                    </article>
                </Col>
                <Col md={3}>
                    <article className="featured">
                        <div className="wrap">
                            <div className="category">
                                <a href="/us">APRIL 10 ISSUES</a>
                            </div>
                            <Image src="https://d.newsweek.com/en/full/1578027/emotional-postponement.jpg" fluid />
                        </div>
                        <a className="mag-featured" href="#">SEE ALL FEATURES</a>
                    </article>
                </Col>
            </Row>
        </section>
    )
}

export default Magazine;