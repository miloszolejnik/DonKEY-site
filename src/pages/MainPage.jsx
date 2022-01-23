import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenFancy } from '@fortawesome/free-solid-svg-icons'
import { getBlogsAction } from '../actions/getBlogsAction';
import { getPostsAction } from "../actions/getPostsAction";

function MainPage() {
    const dispatch = useDispatch();
    //Featch Blogs Names
    useEffect(() => {
        dispatch(getBlogsAction());
    }, []);

    const [postRender, setPostRender] = useState(false);
    const [postsArray, setPostsArray] = useState([null]);

    //Keys for blogs names
    let i = 0

    //Define state
    const BlogsState = useSelector(state => state.getBlogsReducer);
    const BlogsPosts = useSelector(state => state.getPostsReducer);

    function getPosts() {

        const postList = BlogsPosts.post;

        if (BlogsPosts.isLoading) {
            console.log('loading status = ' + BlogsPosts.isLoading)
            setPostRender(false);
        } else {
            if (typeof (postList) === 'string') {
                setPostRender(false);
                console.log(' empty')
            } else {
                setPostsArray(postList.items);
                setPostRender(true);
            }
        }
    }

    //Blog Secelt
    const blogList = (e) => {
        const blogName = e.target.value;
        dispatch(getPostsAction(blogName)).then(getPosts());
    }


    //Render posts
    return (
        <div>
            <select name="blogsList" id="blogsList" onChange={blogList}>
                {BlogsState.isLoading ? null : BlogsState.names.map(blogName => {
                    return <option key={i++} value={blogName.name}>
                        {blogName.name}
                    </option>
                })}
            </select>
            <div>
                {postRender ? postsArray.map(post => {
                    return <StyledPostContainer key={post.id}>
                        <div>
                            <StyledDateAndTitle>
                                <StyledTitle>{post.postTitle}</StyledTitle>
                                <p>{post.createDate}</p>
                            </StyledDateAndTitle>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, laborum.</p>
                            </div>
                        </div>
                        <StyledIcons>
                            <FontAwesomeIcon icon={faTrashCan} />
                            <FontAwesomeIcon icon={faPenFancy} />
                        </StyledIcons>
                    </StyledPostContainer>
                }) : console.log(postRender)}
            </div>
        </div >
    )
}
const StyledPostContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.05);
`
const StyledDateAndTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const StyledTitle = styled.p`
    font-weight: bold;
    cursor: pointer;
`
const StyledIcons = styled.div`
    display: flex;
    align-items: center;
        svg{
            height: 25px;
            margin-left:1rem;
            cursor: pointer;
        }
`
export default MainPage
