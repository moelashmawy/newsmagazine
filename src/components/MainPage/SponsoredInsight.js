import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import data from '../../js/data.json';

function SponsoredInsight(props) {
    const [sponsored, setSponsored] = useState([]);

    useEffect(() => {
        const sponsored = data.sponsored;
        setSponsored(sponsored);
    }, [])

    const sponsoredItems = sponsored.map((item, index) => {
        if (index > 2) return null
        else
            return (
                <article className="sponsored-insight-item" key={item.id}>
                    <div className="wrap">
                        <div className="category">
                            <a href="adsUrl">SPONSORED INSIGHT</a>
                        </div>
                        <Image src={require('./../../images' + item.img)} fluid />
                    </div>
                    <div className="text-wrap">
                        <h4><a href="adsUrl">{item.title}</a></h4>
                        <div className="summary">{item.brief}</div>
                    </div>
                </article>
            )
    })

    return (
        <section className="sponsored-insight">
            {sponsoredItems}
        </section>
    )
}

export default SponsoredInsight;