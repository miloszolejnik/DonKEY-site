import React from 'react'
import styled from 'styled-components'
import { Form, Field, ErrorMessage } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'

import TextError from '../components/TextError';

function Login() {

    return (
        <StyledForm>
            <h2>Login</h2>
            <div className='input-container'>
                <FontAwesomeIcon icon={faUser} />
                <Field type='email' name='email' placeholder="Email" />
            </div>
            <ErrorMessage
                name='email'>
                {
                    (errorMsg) => <ErrorMsg> {errorMsg}</ErrorMsg>
                }
            </ErrorMessage>
            <div className='input-container'>
                <FontAwesomeIcon icon={faLock} />
                <Field type='password' name='password' placeholder='Password' />
            </div>
            <ErrorMessage
                name='password'
                component={TextError} />
            <button type="submit">SUBMIT</button>
        </StyledForm>
    )
}

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    position: relative;
    h2{
        align-self: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 2rem;
    }
    .input-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 1rem 0;
        transition: all ease 0.3s;
        border-bottom: solid black 2px;
        padding: 0rem 1rem;
        position: relative;
        input{
            background-color: transparent;
            border:none;
            padding: .25rem .25rem;
            margin-left: 2rem;
        }
        input:focus{
            outline: none;
        }
    }
    button{
        align-self: center;
        margin-top: 2rem;
        padding: .5rem 4rem;
        background-color: black;
        color: white;
        border: none;
        text-transform: uppercase;
        font-size: 1.25rem;
        cursor: pointer;
        transition: ease .15s all;
    }
    button:hover{
        box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.2);
        transform: translateY(1px);
    }
`
const ErrorMsg = styled.div`
    align-self: center;
    color: red;
    font-style: italic;
    font-size:1rem;
`
export default Login
