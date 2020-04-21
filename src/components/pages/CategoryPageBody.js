import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import data from './../../js/data.json';
import CategoryPageHeading from './CategoryPageHeading';
import HeaderNews from './HeaderNews';
import HeaderNewsSmall from './HeaderNewsSmall';
import NewsFeed from './NewsFeed';
import Pager from './Pager';


function CategoryPageBody(props) {
    const [posts, setPosts] = useState([]);

    const category = props.category;

    useEffect(() => {
        const posts = data.posts;
        setPosts(posts);
    }, []);

    return (
        <Container fluid className='category-page'>
            <CategoryPageHeading category={category} />

            <HeaderNews posts={posts} category={category} />

            <HeaderNewsSmall posts={posts} category={category} />

            <NewsFeed posts={posts} category={category} postsNo={1} />

            <HeaderNewsSmall posts={posts} category={category} />

            <NewsFeed posts={posts} category={category} postsNo={9} />

            <Pager />
        </Container>

    )
}

export default CategoryPageBody;