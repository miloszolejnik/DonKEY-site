import React from 'react'
import styled from 'styled-components'

function HomePage() {
    return (
        <StyledMain>
            <StyledHero>
                <div>
                    <p>Even Donkey can make blog </p>
                    <h2>With us</h2>
                </div>
                <button>Try us now</button>
            </StyledHero>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    display: flex;
    justify-content: center;
    min-height: 80vh;
`
const StyledHero = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1400px;
    font-family: Alice;
    text-align: center;
    div{
        p{
            font-size: 2.5rem;
            margin-bottom: 3rem;
        }
        h2{
            font-size: 3rem;
            margin-bottom: 3rem
        }
    }
    button{
        font-family: Alice;
        border: none;
        border-radius: 25px;
        background-color: black;
        color: white;
        font-size: 2.5rem;
        padding: 1rem 3rem;
        cursor: pointer;
        transition: ease-in-out .5s;
    }
    button:hover{
        box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.2);
        transform: translateY(-10px);
    }
`
export default HomePage
