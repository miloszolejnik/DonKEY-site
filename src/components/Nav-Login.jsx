import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NavLogin() {
    return (
        <StyledNavBar>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </StyledNavBar>
    )
}

const StyledNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 200px;
    max-width: 10vw;
    a{
        font-size: 20px;
        font-family: 'Alice', serif;
        text-decoration: none;
        color: black;
    }
`

export default NavLogin
