import React from 'react'
import styled from 'styled-components'
import svg from '../images/homepage.svg'

function HomePage() {
    return (
        <StyledMain>
            {/* <img src={svg} alt="" /> */}
        </StyledMain>
    )
}


const StyledMain = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-content: center;
    img{
        height: 560px;
    }
`
export default HomePage
