import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'

function Body(props) {
    return (
        <Row className="main-body">

            {/*******
                 * 
                 * 
                 * LEFT SIDE
                 * 
                 * 
                 * ******/}
            <Col lg={3} md={5} className="main-left-column">
                <p className="category-name">FEATURED STORIES</p>
                <section className="featured stories">
                    <article>
                        <div className="wrap">
                            <div className="category">
                                <a href="/us">U.S.</a>
                            </div>
                            <Image src="https://d.newsweek.com/en/full/1579052/venezuela-nicolas-maduro-coronavirus-covid-19.webp" fluid />
                        </div>
                        <h4><a href="#">Trump Admin's Venezuela Anti-Drug Op Distracts from COVID-19: Officials</a></h4>
                        <div className="summary">
                            A senior administration official told Newsweek that the drug trade "can contribute to the spread of the virus," but a senior Pentagon official said the recent mission "has nothing to do with the virus.
                        </div>
                    </article>

                    <article>
                        <div className="wrap">
                            <div className="category">
                                <a href="/us">U.S.</a>
                            </div>
                            <Image src="https://d.newsweek.com/en/full/1578958/uss-theodore-roosevelt-brett-crozier-secrecy-coronavirus.webp" fluid />
                        </div>
                        <h4><a href="#">Military Culture of Secrecy Exposed by Firing USS Roosevelt Commander </a></h4>
                        <div className="summary">
                            A video posted by a sailor says everything there is to say about the firing of Navy Capt. Brett Crozier about how things look to a sailor or soldier when they are out there doing their jobs, compared to the view from a desk in Washington, DC.
                        </div>
                    </article>

                    <article>
                        <div className="wrap">
                            <div className="category">
                                <a href="/us">U.S.</a>
                            </div>
                            <Image src="https://d.newsweek.com/en/full/1578806/trump-win-re-election-high-unemployment-rate.webp" fluid />
                        </div>
                        <h4><a href="#">FDR, Reagan, Obama Won Re-election with Upwards 7% Unemployment. Can Trump?</a></h4>
                        <div className="summary">
                            If history has anything to say about politics and unemployment relates, it's that the higher the jobless rate, the less likely an incumbent president is to win re-election. But the coronavirus is uncharted territory.
                        </div>
                    </article>

                    <article>
                        <div className="wrap">
                            <div className="category">
                                <a href="/news">NEWS</a>
                            </div>
                            <Image src="https://d.newsweek.com/en/full/1578783/cover-story-who-would-you-save-02.webp" fluid />
                        </div>
                        <h4><a href="#">Who Should Doctors Save? Inside the Debate Over Rationing Coronavirus Care</a></h4>
                        <div className="summary">
                            There's no agreement about what factors to consider. Alabama guidelines would exclude patients with severe mental retardation. New York policy is to maximize the number of lives saved—meaning a 90-year-old patient would get the same priority as a 20-year-old.
                            </div>
                    </article>
                </section>

                {/**
                     * SPONSORED INSIGHT CATEGORY
                     **/}
                <section className="sponsored-insight">
                    <article className="sponsored-insight-item">
                        <div className="wrap">
                            <div className="category">
                                <a href="/news">SPONSORED INSIGHT</a>
                            </div>
                            <Image src="https://d.newsweek.com/en/full/1575945/cybersecurity-vantage-hp-sponsor.jpg" fluid />
                        </div>
                        <div className="text-wrap">
                            <h4><a href="#">Weathering the Perfect Storm</a></h4>
                            <div className="summary">
                                COVID-19 is not our only enemy. While the world confronts a pandemic, our critical infrastructure is vulnerable to cyberattack. Read this new report on where the weak points are and how to strengthen defenses against terrorists and cyber-criminals.
                                </div>
                        </div>
                    </article>

                    <article className="sponsored-insight-item">
                        <div className="wrap">
                            <div className="category">
                                <a href="/news">SPONSORED INSIGHT</a>
                            </div>
                            <Image src="https://d.newsweek.com/en/full/1578860/sbf-photo-2.jpg" fluid />
                        </div>
                        <div className="text-wrap">
                            <h4><a href="#">Cryptocurrencies Have the Potential to Solve the Bottlenecks of Our Monetary System</a></h4>
                            <div className="summary">
                                With the U.S.A. announcing it will print a seemingly unlimited supply of dollars to offset the effects of the COVID-19, cryptocurrencies have a unique opportunity to position themselves as a reliable store of value.
                                </div>
                        </div>
                    </article>

                    <article className="sponsored-insight-item">
                        <div className="wrap">
                            <div className="category">
                                <a href="/news">SPONSORED INSIGHT</a>
                            </div>
                            <Image src="https://d.newsweek.com/en/full/1567280/all-points-north-lodge.jpg" fluid />
                        </div>
                        <div className="text-wrap">
                            <h4><a href="#">Who Leads the Field in Dependency Treatment in 2020?</a></h4>
                            <div className="summary">
                                When seeking guidance on beating an addiction, there are many things to consider. Where do you go to ensure that you will not just turn the corner, but keep carrying on down the right road for the rest of your life? Find out more.
                                </div>
                        </div>
                    </article>
                </section>

                {/**
                     * sponsor CATEGORY
                     **/}
                <section className="sponsored-insight">
                    <article className="sponsored-insight-item">
                        <div className="wrap">
                            <Image src="https://d.newsweek.com/en/full/1568509/newsweek-amplify.png" fluid />
                        </div>
                        <div className="text-wrap">
                            <h4><a href="#">Newsweek AMPLIFY Launches Strategic Partnership Solutions for Brands</a></h4>
                            <div className="summary">
                                Newsweek AMPLIFY, the company's independent business unit, has launched a new program to empower digital brands with comprehensive content marketing and advertising strategies.
                                </div>
                        </div>
                    </article>
                </section>

            </Col>


            {/*******
                 * 
                 * 
                 * MIDDLE CONTENT 
                 * 
                 * 
                 * ******/}
            <Col lg={5} md={7} className="main-middle-column">
                {/**
                     * top stories CATEGORY
                     **/}
                <p className="category-name">Top Story</p>
                <article>
                    <div className="wrap">
                        <div className="category">
                            <a href="/business">BUSINESS</a>
                        </div>
                        <Image src="https://d.newsweek.com/en/full/1579055/donald-trump-oil-prices-economy-saudi-coronavirus.webp" fluid />
                    </div>
                    <h4><a href="#">Trump Tells Saudis 'Enough Is Enough' As Price War Wrecks U.S. Producers</a></h4>
                    <div className="summary">
                        The Art of the Oil Deal? The president came to believe that the Saudis' oil-price war was targeting the U.S., not just Russia.
                        </div>
                </article>

                {/**
                     * Heroes of the Pandemic CATEGORY
                     **/}
                <p className="category-name">Heroes of the Pandemic</p>
                <Row>
                    <Col xs={12} sm={4}>
                        <article className="culture-item">
                            <div className="wrap">
                                <div className="tags">
                                    <a href="/business">Panademic Heroes</a>
                                </div>
                                <Image src="https://d.newsweek.com/en/full/1578357/restauranteur-delivers-oranges-hospital-workers-amid-coronavirus-crisis.webp" fluid />
                            </div>
                            <h5><a href="#">Restauranteur Delivers Oranges to Hospital Workers Amid Coronavirus Crisis</a></h5>
                            <div className="summary">
                                "We all have to help each other," Matthew Fermin, owner of East Harlem restaurant Santiago's Beer Garden, told Newsweek.
                            </div>
                        </article>
                    </Col>
                    <Col xs={12} sm={4}>
                        <article className="culture-item">
                            <div className="wrap">
                                <div className="tags">
                                    <a href="/business">Panademic Heroes</a>
                                </div>
                                <Image src="https://d.newsweek.com/en/full/1578426/zoe-monterola-founder-six-feet-supplies.webp" fluid />
                            </div>
                            <h5><a href="#">Teenagers Shop for the Vulnerable During Coronavirus Emergency</a></h5>
                            <div className="summary">
                                "I almost cried," said a user of Six Feet Supplies, a charity started by teenagers who shop for those susceptible to COVID-19.
                            </div>
                        </article>
                    </Col>
                    <Col xs={12} sm={4}>
                        <article className="culture-item">
                            <div className="wrap">
                                <div className="tags">
                                    <a href="/business">Panademic Heroes</a>
                                </div>
                                <Image src="https://d.newsweek.com/en/full/1578399/coronavirus-pandemic-heroes-food-nurses-philadelphia.webp" fluid />
                            </div>
                            <h5><a href="#">Philly DJ Rallies Friends, Strangers to Feed Nurses and Support Businesses </a></h5>
                            <div className="summary">
                                "I want to keep it going as long as we can," Ryan O'Connell told Newsweek.
                            </div>
                        </article>
                    </Col>
                </Row>


                {/**
                     * Culture & Travel CATEGORY
                     **/}
                <p className="category-name">Culture &amp; Travel</p>
                <Row>
                    <Col xs={12} sm={4}>
                        <article className="culture-item">
                            <div className="wrap">
                                <div className="tags">
                                    <a href="/business">Travel</a>
                                </div>
                                <Image src="https://d.newsweek.com/en/full/1576981/meri-gubeladze.webp" fluid />
                            </div>
                            <h5><a href="#">What the World's Chefs Are Cooking Up at Home During the Pandemic</a></h5>
                            <div className="summary">
                                Find out what this international coterie of chefs and food writers—from Tbilisi, Georgia, to Rome to New York City—are cooking up while stuck at home, and get their tips for stocking your kitchens and pantries for optimum deliciousness.
                            </div>
                        </article>
                    </Col>
                    <Col xs={12} sm={4}>
                        <article className="culture-item">
                            <div className="wrap">
                                <div className="tags">
                                    <a href="/business">Travel</a>
                                </div>
                                <Image src="https://d.newsweek.com/en/full/1577620/cul-uncharted-movies-banner.webp" fluid />
                            </div>
                            <h5><a href="#">Take a Virtual Vacation With These Travel-Inspiring Films</a></h5>
                            <div className="summary">
                                For now, from the safety of your couch, you can still explore the world with these wanderlust-inspiring films. From 'The Beach' to 'Into the Wild,' these movies have the power to take you away from reality for a few hours and let you dream of a post-pandemic adventure.
                            </div>
                        </article>
                    </Col>
                    <Col xs={12} sm={4}>
                        <article className="culture-item">
                            <div className="wrap">
                                <div className="tags">
                                    <a href="/business">Travel</a>
                                </div>
                                <Image src="https://d.newsweek.com/en/full/1577190/locked-down-italy-playing-music.webp" fluid />
                            </div>
                            <h5><a href="#">I'm Locked Down in Italy Playing Music—But I'm More Worried About America</a></h5>
                            <div className="summary">
                                Two American musicians play a nightly concert on their balcony while quarantined in their newly adopted home in Italy. It's a gift for their neighbors, but they also have a strong message for Americans, too.
                            </div>
                        </article>
                    </Col>
                </Row>

                {/**
                     * More Stories CATEGORY
                     **/}
                <p className="category-name">More Stories</p>
                <div className="more-stories">
                    <div className="more-stories-item">
                        <div className="more-stories-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1579032/cruise-ship.jpg" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">Class Action Lawsuits Related to Coronavirus Spike Across the Country</a>
                            <p>As employers adjust to work-from-home requirements, new liabilities can arise that human resources managers have not traditionally had to consider.</p>
                        </div>
                    </div>

                    <div className="more-stories-item">
                        <div className="more-stories-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1579031/coronavirus-er-visits-washington-down.jpg" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">ER Visits For Coronavirus-Like Illnesses Drop in Washington Hospitals</a>
                            <p>It's possible people with mild cases are staying out of the hospital and recovering at home, Eric Holdeman, director of the Center for Regional Disaster Resilience told Newsweek.</p>
                        </div>
                    </div>

                    <div className="more-stories-item">
                        <div className="more-stories-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1578135/oil-donald-trump-coronavirus-russia-saudi-arabia.jpg" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">If Trump's Diplomacy Fails, $10 Oil Will Threaten U.S. Energy Independence</a>
                            <p>President Donald Trump meets U.S. energy company CEOs on Friday after a week of diplomacy to end an oil price war between Russia and Saudi Arabia.</p>
                        </div>
                    </div>

                    <div className="more-stories-item">
                        <div className="more-stories-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1578820/covid19-vaccine-coronavirus-upmc.jpg" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">First Potential COVID-19 Vaccine to Be Peer-Reviewed Shows Promise</a>
                            <p>There is currently no vaccine or specific treatment for COVID-19.</p>
                        </div>
                    </div>

                    <div className="more-stories-item">
                        <div className="more-stories-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1578848/usns-comfort.jpg" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">U.S. Navy Ship Virus Relief Efforts 'A Joke' As Hundreds of Beds Lay Empty </a>
                            <p>The city has reported more than 51,800 cases. The U.S.N.S. Comfort, equipped with 1,000 beds, has admitted only 20 patients.</p>
                        </div>
                    </div>

                    <div className="more-stories-item">
                        <div className="more-stories-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1578850/china-coronavirus-report-us-donald-trump-cover.jpg" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">China Rejects U.S. Report on Coronavirus Cover-Up As Slander</a>
                            <p>China has been accused of silencing whistle-blowers and covering up the scale of infections and deaths inside the country.</p>
                        </div>
                    </div>

                    <div className="more-stories-item">
                        <div className="more-stories-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1578845/trump-hotel.jpg" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">Trump Organization Sees $1 Million Daily Losses Due To Coronavirus: Report</a>
                            <p>A"COVID-19 has been especially devastating for the hotel industry," says Chip Rogers, president and CEO of the American Hotel & Lodging Association.</p>
                        </div>
                    </div>

                    <div className="more-stories-item">
                        <div className="more-stories-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1578832/roosevelt.jpg" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">Veterans Denounce Decision to Remove Navy Captain Brett Crozier</a>
                            <p>Thomas Modly, the acting secretary of the Navy, said he had "lost confidence" in Crozier's ability to lead after plea letter leaked to press.</p>
                        </div>
                    </div>

                    <div className="more-stories-item">
                        <div className="more-stories-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1578837/jared-kushner-white-house-coronavirus-response-team.jpg" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">Jared Kushner's Coronavirus Team is Using Personal Email Addresses: Report</a>
                            <p>The president's son-in-law and staff have also used the FreeConferenceCall.com website to set up important meetings.</p>
                        </div>
                    </div>

                    <div className="more-stories-item">
                        <div className="more-stories-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1578626/doctor-chest-xray-stock.jpg" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">COPD Patients Who Have Never Smoked Could Be at Greater Risk of Lung Cancer</a>
                            <p>Some 15 million U.S. adults have the condition according to the U.S. Centers for Disease Control and Prevention.</p>
                        </div>
                    </div>

                    <div className="more-stories-item">
                        <div className="more-stories-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1578705/republicans-stall-next-coronavirus-stimulus.jpg" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">Republicans Stall Next Coronavirus Stimulus Amid Record Unemployment</a>
                            <p>Republicans want to ensure a $2 trillion relief package is implemented properly before setting their sights on doling out more federal funds.</p>
                        </div>
                    </div>
                </div>


            </Col>


            {/*******
                 * 
                 * 
                 * RIGHT SIDE
                 * 
                 * 
                 * ******/}
            <Col lg={4} className="main-right-column">

                {/**
                     * OPINIONS CATEGORY 
                     **/}
                <p className="category-name">OPINION</p>
                <div className="opinions">
                    <div className="opinion">
                        <div className="headshot">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1561683/doug-gordon.webp" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">Our Right to Vote in November Is in Real Danger—But It Can Still Be Saved</a>
                            <div>BY DOUG GORDAN</div>
                        </div>
                    </div>

                    <div className="opinion">
                        <div className="headshot">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1561683/doug-gordon.webp" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">Our Right to Vote in November Is in Real Danger—But It Can Still Be Saved</a>
                            <div>BY DOUG GORDAN</div>
                        </div>
                    </div>

                    <div className="opinion">
                        <div className="headshot">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1561683/doug-gordon.webp" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">Our Right to Vote in November Is in Real Danger—But It Can Still Be Saved</a>
                            <div>BY DOUG GORDAN</div>
                        </div>
                    </div>

                    <div className="opinion">
                        <div className="headshot">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1561683/doug-gordon.webp" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">Our Right to Vote in November Is in Real Danger—But It Can Still Be Saved</a>
                            <div>BY DOUG GORDAN</div>
                        </div>
                    </div>
                </div>


                {/**
                     * THE DEBATE CATEGORY 
                     **/}
                <p className="category-name">THE DEBATE</p>
                <div className="debates">
                    <div className="debate">
                        <div>
                            <div className="debate-img1">
                                <a href="author">
                                    <Image src="https://d.newsweek.com/en/full/1575781/joe-biden.webp" fluid />
                                </a>
                            </div>
                            <div className="info">
                                <a href="#">Biden's Running Mate Needs to Win Him an Entire State, Not Just a Constituency</a>

                            </div>
                        </div>
                        <div className="byline">
                            <div className="debate-headshot">
                                <a href="author">
                                    <Image src="https://d.newsweek.com/en/full/1561683/doug-gordon.webp" fluid />
                                </a>
                            </div>

                            <div className="f1">
                                <span>By </span>
                                <a href="/authors" class="author-name">Peter Roff</a>
                            </div>
                        </div>
                    </div>

                    <div className="vs">VS</div>

                    <div className="debate">
                        <div>
                            <div className="debate-img1">
                                <a href="author">
                                    <Image src="https://d.newsweek.com/en/full/1575781/joe-biden.webp" fluid />
                                </a>
                            </div>
                            <div className="info">
                                <a href="#">Biden's Running Mate Needs to Win Him an Entire State, Not Just a Constituency</a>

                            </div>
                        </div>
                        <div className="byline">
                            <div className="debate-headshot">
                                <a href="author">
                                    <Image src="https://d.newsweek.com/en/full/1561683/doug-gordon.webp" fluid />
                                </a>
                            </div>
                            <div className="f1">
                                <span>By </span>
                                <a href="/authors" class="author-name">Peter Roff</a>
                            </div>
                        </div>
                    </div>
                    <div className="clear-both"></div>
                </div>

                {/**
                     * LATEST NEWS CATEGORY 
                     **/}
                <p className="category-name">LATEST NEWS</p>
                <div className="latest-news">
                    <div className="latest-news-item">
                        <div className="latest-news-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1579066/mega-millions-multi-state-lottery.webp" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">Mega Millions Drawing For 04/03/20: Friday Jackpot is $121 Million</a>
                        </div>
                    </div>

                    <div className="latest-news-item">
                        <div className="latest-news-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1578837/jared-kushner-white-house-coronavirus-response-team.webp" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">Strategic National Stockpile Changes to Match Jared Kushner's Claims</a>
                        </div>
                    </div>

                    <div className="latest-news-item">
                        <div className="latest-news-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1579054/us-shale-poised-comeback-amidst-oil-price-war.webp" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">U.S. Shale is Poised For a Comeback Amidst the Oil Price War</a>
                        </div>
                    </div>

                    <div className="latest-news-item">
                        <div className="latest-news-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1579049/gop-group-targets-trump-amid-falling-polls.webp" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">GOP Group's Ad Attacks Trump as More Voters Blame Him for Virus' Spread</a>
                        </div>
                    </div>

                    <div className="latest-news-item">
                        <div className="latest-news-item-img">
                            <a href="author">
                                <Image src="https://d.newsweek.com/en/full/1579058/emma-watson-circle.webp" fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="#">What Movie Ending Ruined the Whole Thing For You?</a>
                        </div>
                    </div>
                </div>

                {/**
                     * sponsored insight CATEGORY
                     **/}
                <section className="sponsored-insight">
                    <article className="sponsored-insight-item">
                        <div className="wrap">
                            <div className="category">
                                <a href="/news">SPONSORED INSIGHT</a>
                            </div>
                            <Image src="https://d.newsweek.com/en/full/1559216/tokyo-my-city-chizu-nakamoto.jpg" fluid />
                        </div>
                        <div className="text-wrap">
                            <h4><a href="#">Female Entrepreneur Active in Tokyo and Uganda</a></h4>
                            <div className="summary">
                                APT Women aims to foster and educate fledgling global business leaders like Chizu Nakamoto.
                                </div>
                        </div>
                    </article>
                </section>

                {/**
                     * sign up CATEGORY
                     **/}
                <div className="signup">
                    <div className="title">
                        <span className="signup-icon"></span>
                        <p>Sign up for our Newsletter</p>
                    </div>
                    <a href="/signup" className="signup-1b">SIGN UP</a>
                    <br />
                    <a href="/update" className="signup-2b">Update your preferences »</a>
                </div>

                {/**
                     * sponsored insight CATEGORY
                     **/}
                <section className="sponsored-insight">
                    <article className="sponsored-insight-item">
                        <div className="wrap">
                            <div className="category">
                                <a href="/news">SPONSORED INSIGHT</a>
                            </div>
                            <Image src="https://d.newsweek.com/en/full/1573632/lally-school-management-rensselaer-polytechnic-institute.png" fluid />
                        </div>
                        <div className="text-wrap">
                            <h4><a href="#">How Can a Good Business Education Benefit You?</a></h4>
                            <div className="summary">
                                Enrolling at a good Business School might be the best investment you can make in your future, and while costs can be significant, the rewards are incalculable. Find out more.
                                </div>
                        </div>
                    </article>

                    <article className="sponsored-insight-item">
                        <div className="wrap">
                            <div className="category">
                                <a href="/news">SPONSORED INSIGHT</a>
                            </div>
                            <Image src="https://d.newsweek.com/en/full/1563365/american-heritage-school.jpg" fluid />
                        </div>
                        <div className="text-wrap">
                            <h4><a href="#">What Can A Private Education Do For Your Child?</a></h4>
                            <div className="summary">
                                What is the single most consequential choice you make to give your child the best possible advantage in life? If you think it’s education, read on.
                                </div>
                        </div>
                    </article>
                </section>

                {/**
                     * sponsor CATEGORY
                     **/}
                <section className="sponsored-insight">
                    <article className="sponsored-insight-item">
                        <div className="wrap">
                            <Image src="https://d.newsweek.com/en/full/1572014/worlds-best-hospitals-2020.png" fluid />
                        </div>
                        <div className="text-wrap">
                            <h4><a href="#">World's Best Hospitals 2020</a></h4>
                            <div className="summary">
                                Newsweek partnered with Statista Inc. to rank the leading hospitals in 21 countries
                                </div>
                        </div>
                    </article>
                </section>
            </Col>
        </Row>
    )
}

export default Body;