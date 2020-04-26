import React from 'react';

function PostDetails(props) {
    const post = props.post;

    return (
        <div className='post-details'>
            <p>{post.brief}</p>
        </div>
    )
}

export default PostDetails;