import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import img1 from './../../images/1.jpg';
import authorImg from './../../images/doug-gordon.webp';
import Opinions from './Opinions';
import FeaturedStories from './FeaturedStoris';
import SponsoredInsight from './SponsoredInsight';
import HeroesOfThePandemic from './HeroesOfThePandemic';
import CultureTravel from './CultureTravel';
import MoreStories from './MoreStories';
import LatestNews from './LatestNews';
import SidebarSingleItem from './SidebarSingleItem';
import SignUp from './SignUp';
import TopStory from './TopStory';

function Body(props) {
    return (
        <Row className="main-body">

            {/******* LEFT SIDE ******/}
            <Col lg={3} md={5} className="main-left-column">
                {/******* FeaturedStories ******/}
                <FeaturedStories />


                {/*** SPONSORED INSIGHT CATEGORY **/}
                <SponsoredInsight />


                {/*** Sidebar single Item **/}
                <SidebarSingleItem />

            </Col>


            {/******* MIDDLE CONTENT *******/}
            <Col lg={5} md={7} className="main-middle-column">
                {/****** top stories CATEGORY ******/}
                <TopStory />

                {/*** Heroes of the Pandemic CATEGORY **/}
                <HeroesOfThePandemic />


                {/*** Culture & Travel CATEGORY **/}
                <CultureTravel />


                {/*** More Stories CATEGORY **/}
                <MoreStories />
            </Col>


            {/******* RIGHT SIDE ******/}

            <Col lg={4} className="main-right-column">

                {/*** OPINIONS CATEGORY **/}
                <Opinions />


                {/** THE DEBATE CATEGORY  **/}
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

                {/*** LATEST NEWS CATEGORY  **/}
                <LatestNews />



                {/*** sign up CATEGORY **/}
                <SignUp />

                {/**
                     * sponsored insight CATEGORY
                     **/}
                <SponsoredInsight />

            </Col>
        </Row>
    )
}

export default Body;