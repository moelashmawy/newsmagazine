import React from 'react';
import { Link } from 'react-router-dom';


function PostTopics(props) {
    const { topics, post } = props;

    const topic = topics.map(item => {
        return (
            <Link to={'/topic/' + item.name} key={item.id}>{item.name}</Link>
        )
    });

    return (
        <div className='topics'>
            <Link to={'/' + post.category}>{post.category}</Link>
            {topic}
        </div>
    )
}

export default PostTopics;