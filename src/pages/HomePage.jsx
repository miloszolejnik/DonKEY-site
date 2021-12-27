import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup';

import Login from '../components/Login'

function HomePage() {

    const location = useLocation().pathname;

    //Initial Form Values
    const initialValues = {
        email: '',
        password: '',
    };

    //OnSubmit
    const onSubmit = value => {
        alert(value.email, value.password);
    };

    //Form Validation by Yup
    const validationSchema = Yup.object({
        email: Yup.string().
            required('Field is required').
            email('Invalid email format'),
        password: Yup.string().
            required('Field is required'),
    })

    return (
        <StyledMain>
            <StyledHero>
                <div>
                    <p>Even Donkey can make blog </p>
                    <h2>With us</h2>
                </div>
                <button>Try us now</button>
            </StyledHero>
            {location === '/login' || location === '/register' ?
                <StyledBlackout>
                    <LoginContainer>
                        <Formik
                            className="form-container"
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit} >
                            <Login />
                        </Formik>
                    </LoginContainer>
                </StyledBlackout>
                : null}
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

//  Login & Register styles

const StyledBlackout = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index:99;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.6);
`
const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 3rem;
    background-color: whitesmoke;
    border-radius: 2%;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.397);
`
export default HomePage
