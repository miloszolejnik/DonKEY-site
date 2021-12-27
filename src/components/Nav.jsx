import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components'
import donkey from '../images/donkey-logo.svg'
import NavLogin from './Nav-Login';

function Nav() {
    return (
        <StyledNav>
            <StyledNavContainer>
                <StyledLogin to="/">
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
    padding: 0rem 3rem;
    width: 100vw;
    min-height: 10vh;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.05);
`

const StyledNavContainer = styled.div`
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
`

const StyledLogin = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
`
export default Nav
