import React from 'react';
import { Row, Col } from 'react-bootstrap';
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
                            <a href="someUrl"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                        </li>
                        <li>
                            <a href="someUrl"><FontAwesomeIcon icon={faTwitter} /></a>
                        </li>
                        <li>
                            <a href="someUrl"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                        </li>
                        <li>
                            <a href="someUrl"><FontAwesomeIcon icon={faTumblr} /></a>
                        </li>
                        <li>
                            <a href="someUrl"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </li>
                    </ul>
                </Col>
            </Row>

            <div className="footer-editions">
                <span>Editions: </span>
                <ul>
                    <li>
                        <a href="someUrl">U.S. Edition</a>
                    </li>
                    <li>
                        <a href="someUrl">日本</a>
                    </li>
                    <li>
                        <a href="someUrl">Pakistan</a>
                    </li>
                    <li>
                        <a href="someUrl">Polska</a>
                    </li>
                    <li>
                        <a href="someUrl">România</a>
                    </li>
                </ul>
            </div>

            <div className="footer-nav">
                <ul>
                    <li>
                        <a href="someUrl">About Us</a>
                    </li>
                    <li>
                        <a href="someUrl">Corrections</a>
                    </li>
                    <li>
                        <a href="someUrl">Contact Us</a>
                    </li>
                    <li>
                        <a href="someUrl">Editorial Guidelines</a>
                    </li>
                    <li>
                        <a href="someUrl">Advertise</a>
                    </li>
                    <li>
                        <a href="someUrl">Copyright</a>
                    </li>
                    <li>
                        <a href="someUrl">Terms &amp; Conditions</a>
                    </li>
                    <li>
                        <a href="someUrl">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="someUrl">Cookie Policy</a>
                    </li>
                    <li>
                        <a href="someUrl">Terms of Sale</a>
                    </li>
                    <li>
                        <a href="someUrl">Archive</a>
                    </li>
                    <li>
                        <a href="someUrl">Announcements</a>
                    </li>
                    <li>
                        <a href="someUrl">Consent preferences</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;