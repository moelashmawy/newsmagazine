import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import data from './../../js/data.json';

function MoreStories(props) {
    const [moreStories, setMoreStories] = useState([]);

    useEffect(() => {
        const moreStories = data.posts;
        setMoreStories(moreStories);
    }, [])

    const moreStoriesItems = moreStories.map((item, index) => {
        if (index > 11) {
            return null;
        } else
            return (
                <div className="more-stories" key={item.id} data-aos="fade-up">
                    <div className="more-stories-item">
                        <div className="more-stories-item-img">
                            <a href="author">
                                <Image src={require('./../../images' + item.image)} fluid />
                            </a>
                        </div>
                        <div className="info">
                            <a href="someUrl">{item.title}</a>
                            <p>{item.brief}</p>
                        </div>
                    </div>
                </div>
            )
    })

    return (
        <div>
            <p className="category-name">More Stories</p>
            {moreStoriesItems}
        </div>
    )
}

export default MoreStories;