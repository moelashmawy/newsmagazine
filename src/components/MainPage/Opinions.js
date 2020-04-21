import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import data from '../../js/data.json';

function Opinions(props) {
    const [opinions, setOpinions] = useState([]);

    useEffect(() => {
        const opinions = data.opinions;
        setOpinions(opinions);
    }, [])

    const opinionItems = opinions.map((item, index) => {
        if (index > 3) return null;
        else
            return (
                <div className="opinion" key={item.id}>
                    <div className="headshot">
                        <a href="author">
                            <Image src={require('./../../images' + item.authorImg)} fluid />
                        </a>
                    </div>
                    <div className="info">
                        <a href="someUrl">{item.title}</a>
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