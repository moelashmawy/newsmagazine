import React from 'react';
import img1 from './../../images/1.jpg';
import { Image } from 'react-bootstrap';
import authorImg from './../../images/doug-gordon.webp';

function Debate(props) {

    return (
        <div>
            <p className="category-name">THE DEBATE</p>
            <div className="debates">
                <div className="debate">
                    <div>
                        <div className="debate-img1">
                            <a href="author">
                                <Image src={img1} fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="someUrl">Biden's Running Mate Needs to Win Him an Entire State, Not Just a Constituency</a>
                        </div>
                    </div>
                    <div className="byline">
                        <div className="debate-headshot">
                            <a href="author">
                                <Image src={authorImg} fluid />
                            </a>
                        </div>

                        <div className="f1">
                            <span>By </span>
                            <a href="/authors" className="author-name">Peter Roff</a>
                        </div>
                    </div>
                </div>

                <div className="vs">VS</div>

                <div className="debate">
                    <div>
                        <div className="debate-img1">
                            <a href="author">
                                <Image src={img1} fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="someUrl">Biden's Running Mate Needs to Win Him an Entire State, Not Just a Constituency</a>

                        </div>
                    </div>
                    <div className="byline">
                        <div className="debate-headshot">
                            <a href="author">
                                <Image src={authorImg} fluid />
                            </a>
                        </div>
                        <div className="f1">
                            <span>By </span>
                            <a href="/authors" className="author-name">Peter Roff</a>
                        </div>
                    </div>
                </div>
                <div className="clear-both"></div>
            </div>
        </div>
    )
}

export default Debate;