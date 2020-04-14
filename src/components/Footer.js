import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faInstagramSquare, faTumblr, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
    return (
        <section className="footer-body">
            <Row className="footer-heading">
                <Col md={3}>
                    <div className="title">NewsMagazine</div>
                </Col>
                <Col md={3} className="footer-rights">
                    <div >© 2020 NewsMagazine</div>
                </Col>
                <Col md={6} className="footer-social">
                    <ul>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faTumblr} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </li>
                    </ul>
                </Col>
            </Row>

            <div className="footer-editions">
                <span>Editions: </span>
                <ul>
                    <li>
                        <a href="#">U.S. Edition</a>
                    </li>
                    <li>
                        <a href="#">日本</a>
                    </li>
                    <li>
                        <a href="#">Pakistan</a>
                    </li>
                    <li>
                        <a href="#">Polska</a>
                    </li>
                    <li>
                        <a href="#">România</a>
                    </li>
                </ul>
            </div>

            <div className="footer-nav">
                <ul>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Corrections</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                    <li>
                        <a href="#">Editorial Guidelines</a>
                    </li>
                    <li>
                        <a href="#">Advertise</a>
                    </li>
                    <li>
                        <a href="#">Copyright</a>
                    </li>
                    <li>
                        <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Cookie Policy</a>
                    </li>
                    <li>
                        <a href="#">Terms of Sale</a>
                    </li>
                    <li>
                        <a href="#">Archive</a>
                    </li>
                    <li>
                        <a href="#">Announcements</a>
                    </li>
                    <li>
                        <a href="#">Consent preferences</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;