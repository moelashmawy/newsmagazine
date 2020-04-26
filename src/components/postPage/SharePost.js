import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faTumblr, faLinkedinIn, faPinterestP, faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function SharePost(props) {

    return (
        <div className="share-post">
            <span>SHARE</span>
            <ul>
                <li>
                    <a href="someUrl"><FontAwesomeIcon icon={faFacebookF} /></a>
                </li>
                <li>
                    <a href="someUrl"><FontAwesomeIcon icon={faTwitter} /></a>
                </li>
                <li>
                    <a href="someUrl"><FontAwesomeIcon icon={faTumblr} /></a>
                </li>
                <li>
                    <a href="someUrl"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </li>
                <li>
                    <a href="someUrl"><FontAwesomeIcon icon={faPinterestP} /></a>
                </li>
                <li>
                    <a href="someUrl"><FontAwesomeIcon icon={faRedditAlien} /></a>
                </li>
                <li>
                    <a href="someUrl"><FontAwesomeIcon icon={faEnvelope} /></a>
                </li>
            </ul>
        </div>
    )
}

export default SharePost;