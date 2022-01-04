import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getBlogsAction } from '../actions/getBlogsAction';
import { getPostsAction } from "../actions/getPostsAction";

function MainPage() {

    //Featch Blogs Names
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogsAction())
    }, []);

    //Keys for blogs names
    let i = 0

    //Define state
    const BlogsState = useSelector(state => state.getBlogsReducer);
    // const getPosts = dispatch(getPostsAction(BlogsState.names[0]));
    //Blog Secelt
    const blogList = (e) => {
        const blogName = e.target.value;
        dispatch(getPostsAction(blogName));
    }

    //Post state
    const postState = useSelector(state => state.getPostsReducer);

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
                {postState.isLoading ? null : null}
            </div>
        </div >
    )
}

export default MainPage
