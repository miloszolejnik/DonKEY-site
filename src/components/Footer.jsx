import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <StyledFooter>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate soluta maiores magni nam beatae, iste sunt, amet ex sint, ipsa ut vitae recusandae delectus quos doloremque temporibus voluptatum atque odio!</p>
        </StyledFooter>
    )
}
const StyledFooter = styled.footer`
    display: flex;
    width: 100vw;
    min-height: 10vh;
    justify-content: center;
    align-items: center;
    box-shadow: 0px -4px 10px 5px rgba(0, 0, 0, 0.05);

    color: #d8d8d8;
`
export default Footer
