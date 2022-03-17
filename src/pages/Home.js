import React from 'react'
import StyledLogo from '../components/StyledLogo';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';


function Home() {

    // const [value, setValue] = useState(0);

    return (
        <StyledMainContainer>
            <StyledContentConteiner>
                <StyledLogo />
                {/* {value === 0 ? <LoginForm /> : null} */}
                <LoginForm />
            </StyledContentConteiner>
        </StyledMainContainer>
    )
}

const StyledMainContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    height: 100vh ;
    width: 100vw ;
    background: rgb(19,26,42);
    background: linear-gradient(313deg, rgba(19,26,42,1) 0%, rgba(10,13,23,1) 25%, rgba(2,2,4,1) 70%, rgba(0,0,0,1) 90%);
    text-align: center ;
    @media screen and (min-width: 600px){
        align-items: end ;
    }
`
const StyledContentConteiner = styled.div`
    background-color: #f8f8ff;
    height: 100vh ;
    width: auto ;
    padding: 2rem 3rem ;
`
export default Home