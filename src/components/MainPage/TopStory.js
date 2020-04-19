import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import data from './../../js/data.json';
import { Link } from 'react-router-dom';


function TopStory(props) {
    const [topStory, setTopStory] = useState([]);

    useEffect(() => {
        const topStory = data.posts;
        setTopStory(topStory);
    }, [])

    const topStoryItems = topStory.map((item, index) => {
        if (index > 0) {
            return null;
        } else
            return (
                <article key={item.id}>
                    <div className="wrap">
                        <div className="category">
                            <Link to={item.category}>{item.category}</Link>
                        </div>
                        <Image src={require('./../../images' + item.image)} fluid />
                    </div>
                    <h4><a href="someUrl">{item.title}</a></h4>
                    <div className="summary">{item.brief}</div>
                </article>
            )
    })

    return (
        <div>
            <p className="category-name">Top Story</p>
            {topStoryItems}
        </div>
    )
}

export default TopStory;