import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import data from './../../js/data.json';

function SidebarSingleItem(props) {
    const [sidebarSingleItem, setSidebarSingleItem] = useState([]);

    useEffect(() => {
        const sidebarSingleItem = data.posts;
        setSidebarSingleItem(sidebarSingleItem);
    }, [])

    const sidebarSingleItemItems = sidebarSingleItem.map((item, index) => {
        if (index > 0) {
            return null;
        } else
            return (
                <article className="sponsored-insight-item" key={item.id}>
                    <div className="wrap">
                        <Image src={require('./../../images' + item.image)} fluid />
                    </div>
                    <div className="text-wrap">
                        <h4><a href="someUrl">{item.title}</a></h4>
                        <div className="summary">{item.brief}</div>
                    </div>
                </article>
            )
    })

    return (
        <section className="sponsored-insight">
            {sidebarSingleItemItems}
        </section>
    )
}

export default SidebarSingleItem;