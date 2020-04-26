import React, { useEffect, useState } from 'react';

function PostImage(props) {
    const { post } = props;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const comments = post.comments;
        setComments(comments);
    })



    return (
        <div className="post-comments">
            <p>Conversation (34)</p>
            <p>Sort by</p>
            <textarea />
        </div>
    )
}

export default PostImage;