import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import data from '../../js/data.json';
import { Link } from 'react-router-dom';

function Opinions(props) {
    const [opinions, setOpinions] = useState([]);

    useEffect(() => {
        const opinions = data.posts.filter(item => item.category === 'opinion');
        setOpinions(opinions);
    }, [])

    const opinionItems = opinions.map((item, index) => {
        if (index > 3) return null;
        else
            return (
                <div className="opinion" key={item.id}>
                    <div className="headshot">
                        <Link to={'/opinion/' + item.id}>
                            <Image src={require('./../../images' + item.authorImg)} fluid />
                        </Link>
                    </div>
                    <div className="info">
                        <Link to={'/opinion/' + item.id}>{item.title}</Link>
                        <div>BY {item.author}</div>
                    </div>
                </div>
            )
    })

    return (
        <div>
            < p className="category-name" > OPINION</p >
            <div className="opinions">
                {opinionItems}
            </div>
        </div>
    )
}

export default Opinions;