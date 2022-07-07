import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBlogsAction } from '../actions/getBlogsAction'
import styled from 'styled-components';
import MainLeftSide from '../components/MainLeftSide';

function MainPage() {

    const selectBlogs = state => state.getBlogsReducer;
    const blogs = useSelector(selectBlogs);

    const dispatch = useDispatch();

    function FetchBlogs() {
        dispatch(
            getBlogsAction())
    }

    if (blogs.isLoading === true) {
        FetchBlogs();
    }

    return (
        <StyledMain>

            <MainLeftSide />
            <div>Right side</div>

        </StyledMain>
    )
}

const StyledMain = styled.div`
    display: flex;
`

export default MainPage