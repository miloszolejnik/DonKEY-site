import React from 'react';
import styled from 'styled-components';
import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';

function Main() {

    const loginToken = sessionStorage.getItem('loginToken');

    return (
        <StyledDiv>
            {loginToken ? <MainPage /> : <HomePage />}
        </StyledDiv>
    )
}
const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    min-height: 80vh;
`
export default Main
