import React from 'react'
import styled from 'styled-components'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App() {

    return (
        <StyledSite>
            <Nav />
            <Main />
            <Footer />
        </StyledSite>
    )
}
const StyledSite = styled.div`
    overflow-x: hidden;
`