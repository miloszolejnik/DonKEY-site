import React from 'react'
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import donkey from '../images/donkey-logo.svg'
import NavLogin from './Nav-Login';

function Nav(location) {
    return (
        <StyledNav>
            <StyledNavContainer>
                <StyledLogin>
                    <img src={donkey} alt="DonKEY logo" />
                    <h1>DonKey</h1>
                </StyledLogin>
                <Routes>
                    <Route exact path="/" element={<NavLogin />} />
                </Routes>
            </StyledNavContainer>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    padding: 1rem 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.05);
`

const StyledNavContainer = styled.div`
    max-width: 100vw;
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
`

const StyledLogin = styled.div`
    display: flex;
    align-items: center;
`
export default Nav
