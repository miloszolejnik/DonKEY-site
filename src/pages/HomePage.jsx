import React from 'react'
import styled from 'styled-components'
import svg from '../images/homepage.svg'

function HomePage() {
    return (
        <StyledMain>
            <StyledHero>
                <img src={svg} alt="" />
                <StyledHeroDesc>
                    <div>
                        <p>Even Donkey can make blog </p>
                        <h2>With us</h2>
                    </div>
                    <button>Try us now</button>
                </StyledHeroDesc>
            </StyledHero>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 0 3rem;
    min-height: 80vh;
`
const StyledHero = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    img{
        max-width: 100%;
        display: block;
    }
`
const StyledHeroDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: Alice;
    text-align: right;
    align-items: flex-end;
    div{
        display: flex;
        flex-direction: column;
        p{
            font-size: 2rem;
        }
        h2{
            font-size: 2.5rem;
        }
    }
    button{
        //Display
        display: flex;
        justify-content: center;
        border-radius: 2rem;
        border: none;
        background-color: #2EF914;
        //Font
        font-family: Alice;
        color: white;
        padding: .75rem 3rem;
        font-size: 2.5rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
`
export default HomePage
