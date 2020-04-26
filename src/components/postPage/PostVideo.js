import React from 'react';
import vid from './../../images/1.mp4';

function PostVideo(props) {

    return (
        <video width="100%" controls>
            <source src={vid} type="video/mp4" />
        </video>
    )
}

export default PostVideo;