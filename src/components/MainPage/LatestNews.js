import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import data from './../../js/data.json';

function LatestNews(props) {
    const [latestNews, setLatestNews] = useState([]);

    useEffect(() => {
        const latestNews = data.posts;
        setLatestNews(latestNews);
    }, [])

    const latestNewsItems = latestNews.map((item, index) => {
        if (index > 5) {
            return null;
        } else
            return (
                <div className="latest-news-item" key={item.id} data-aos="fade-up">
                    <div className="latest-news-item-img">
                        <a href="author">
                            <Image src={require('./../../images' + item.image)} fluid />
                        </a>
                    </div>
                    <div className="info">
                        <a href="someUrl">{item.title}</a>
                    </div>
                </div>
            )
    })

    return (
        <div>
            <p className="category-name">LATEST NEWS</p>
            <div className="latest-news">
                {latestNewsItems}
            </div>
        </div>
    )
}

export default LatestNews;