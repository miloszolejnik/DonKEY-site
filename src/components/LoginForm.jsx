import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { loginAction } from '../actions/loginAction'
import { useDispatch } from 'react-redux'

const LoginForm = () => {

    const dispatch = useDispatch();

    const validationSchema = yup.object({
        email: yup.string().email('Invalid email').required('Required'),
        password: yup.string().required('Required')
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            dispatch(loginAction(values.email, values.password)).then(
                console.log('succes')
            )
        },
        validationSchema,
    });
    return (
        <StyledFormContainer>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder='Email'
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                <label htmlFor='password'>Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder='Password'
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                <button type="submit">Login</button>
            </form>
        </StyledFormContainer>
    )
}
const StyledFormContainer = styled.div`
    margin-top: 3rem ;
    text-align: start ;
    font-family: Alice;
    form{
        display: flex ;
        flex-direction: column ;
        input{
            margin-bottom: 1rem;
            margin-top: .25rem ;
            font-size: .75rem ;
            padding: .4rem 1rem ;
            overflow: hidden ;
            border: none;
            border-bottom: solid black 1px ;
            transition: ease .4s ;
        }
        input:focus{
            border-color: red;
            outline: none ;
            padding: .4rem 1.5rem .4rem .5rem ;
        }
        button{
            border: none ;
            background-color: transparent ;
            outline: none ;
            font-family: Alice ;
            font-size: 1rem;
            margin: 1rem 0 ;
            border-radius: 50px ;
            border: solid black 1px ;
            padding: .5rem 0 ;
            cursor: pointer;
            position: relative ;
            overflow: hidden ;
            transition: all ease-in-out .5s ;
            color: black ;
            z-index: 0;
        }
        button::before{
            position: absolute ;
            top: 0px ;
            left: -110%;
            content: '' ;
            background-color: black ;
            height: 100% ;
            width: 100% ;
            transition: all ease-in-out .5s ;
            pointer-events: none ;
            z-index: -1;
        }
        button:hover{
            color: white ;
            &:hover:before{
                pointer-events: none ;
                left: 0% ;
            }
        }
    }
`
export default LoginForm