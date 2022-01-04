import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function Posts() {

    const postArray = useSelector(state => state.getPostsReducer.post.items);
    console.log(postArray)
    return (
        <PostContainer>
            {postArray ? null : postArray.map(element => {
                console.log(element)
            })}
        </PostContainer>
    )
}
const PostContainer = styled.div`

`
const StyledCard = styled.div``

export default Posts
