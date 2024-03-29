import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import data from '../../js/data.json';
import { Link } from 'react-router-dom';

function FeaturedStories(props) {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const stories = data.posts;
        setStories(stories);
    }, [])

    const storiesItems = stories.map((item, index) => {
        if (index > 3) {
            return null;
        } else
            return (
                <article key={item.id}>
                    <div className="wrap">
                        <div className="category">
                            <Link to={'/' + item.category}>{item.category}</Link>
                        </div>
                        <Image src={require('./../../images' + item.image)} fluid />
                    </div>
                    <h4><Link to={'/' + item.category + '/' + item.id}>{item.title}</Link></h4>
                    <div className="summary">{item.brief}</div>
                </article>
            )
    })

    return (
        <div>
            <p className="category-name">FEATURED STORIES</p>
            <section className="featured stories">
                {storiesItems}
            </section>
        </div>
    )
}

export default FeaturedStories;