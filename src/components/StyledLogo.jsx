import React from 'react'
import styled from 'styled-components'
import donkeyLogo from '../images/donkey-logo.svg';
function StyledLogo() {
    return (
        <StyledLogoContainer>
            <img src={donkeyLogo} />
            <h1>DonKey</h1>
        </StyledLogoContainer>
    )
}

const StyledLogoContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    font-family: 'Alice', serif;
    h1{
        margin-top: 1rem ;
        transition: ease-in-out all .5s ;
    }
    h1:hover{
        letter-spacing: 3px ;
        color: #f02547 ;
    }
    img{
        max-height: 64px ;
    }
`

export default StyledLogo