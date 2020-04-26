import React from 'react';
import { Image } from 'react-bootstrap';


function PostImage(props) {
    const { imgUrl } = props;

    return (
        <div className="post-image">
            <Image src={require('./../../images' + imgUrl)} fluid />
            <div className="image-alt">{props.post.title}</div>
        </div>
    )
}

export default PostImage;