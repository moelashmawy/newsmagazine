import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../js/data.json';

function PostImage(props) {
    const [posts, setPosts] = useState([]);

    const { post } = props;

    useEffect(() => {
        const posts = data.posts;
        setPosts(posts);

    }, [])

    const filteredPosts = posts.filter(item => item.category === post.category);

    const readPost = filteredPosts.map((item, index) => {
        if (index > 2) return null;
        else
            return (
                <li key={item.id}><Link to={'/' + item.category + '/' + item.id}>{item.title}</Link></li>
            )
    })

    return (
        <div className="read-more">
            <div className="block-title">
                <p>Read More</p>
            </div>

            <ul className="posts-list">
                {readPost}
            </ul>
        </div>
    )
}

export default PostImage;