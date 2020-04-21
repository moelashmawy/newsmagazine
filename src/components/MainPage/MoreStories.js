import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import data from '../../js/data.json';
import { Link } from 'react-router-dom';

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
                            <Link to={'/' + item.category + '/' + item.id}>
                                <Image src={require('./../../images' + item.image)} fluid />
                            </Link>
                        </div>
                        <div className="info">
                            <Link to={'/' + item.category + '/' + item.id}>{item.title}</Link>
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