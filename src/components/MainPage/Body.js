import React from 'react';
import { Row, Col } from 'react-bootstrap';
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
import Debate from './Debate';

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
                <Debate />

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