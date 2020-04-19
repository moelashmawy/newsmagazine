import React, { useEffect, useState } from 'react';
import data from './../../js/data.json';

function CategoryPageHeading(props) {
    const [categories, setPosts] = useState([]);

    useEffect(() => {
        const categories = data.categories;
        setPosts(categories);
    }, []);

    const filteredPosts = categories.filter(item => item.name === props.category);

    const categoryName = filteredPosts.map(item => {
        return (
            <span className="ic1">{item.displayName}</span>
        )
    })

    return (
        <div className="editirs-pick-heading">
            <span className="ic"></span>
            {categoryName}
        </div>
    )
}

export default CategoryPageHeading;