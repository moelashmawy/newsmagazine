import React from 'react';
import ShowCategory from './ShowCategory';

function Categories(props) {
    return (
        <section className="categories-body">
            <ShowCategory category={'us'} />
            <ShowCategory category={'world'} />
            <ShowCategory category={'business'} />
            <ShowCategory category={'health'} />
            <ShowCategory category={'culture'} />
        </section>
    )
}

export default Categories;