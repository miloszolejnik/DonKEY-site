import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import crossHair from '../images/crosshair.svg';
import user from '../images/user.png';

function MainLeftSide() {

    const selectBlogs = state => state.getBlogsReducer;
    const blogs = useSelector(selectBlogs);

    return (
        <StyledContainer>
            <UserSection>
                <div className='img'></div>
                <div className='userData'>
                    <ul>User Section</ul>
                </div>
                <div className='cross'>
                    <img src={crossHair} alt="corsshair" />
                </div>

            </UserSection>
            <BlogList>
                {blogs.names.length > 1 ? blogs.names.map((name) => {
                    return <div className='blog' key={name.name} >{name.name}</div>
                }) : console.log('no')}
            </BlogList>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    position: static;
    top: 0px ;
    left: 0px ;
    height: 100vh ;
    background-color: #eeeeee ;
    box-shadow: 0px 0px 60px -1px rgba(0,0,0,0.35);
    padding: 1rem 2rem 1rem 2rem;
    font-family: 'Alice', serif;
`
const UserSection = styled.div`
    display: flex ;
    margin-bottom: 1rem ;
    .img{
        background-color: red ;
        height: 70px ;
        width: 70px ;
        border-radius: 100% ;
        margin-right: 1rem ;
        background: url(${user}) ;
        background-position: top ;
        background-repeat: no-repeat ;
        background-size: cover ;
    }
    .userData{
        align-self: center ;
    }
    .cross{
        flex-grow: 1;
        justify-content: center ;
        img{
            margin-left: auto ;
            display: flex ;
            height: 2rem ;
            cursor: pointer;
        }
    }
`
const BlogList = styled.div`
    margin-left: 1rem ;
    display: flex ;
    flex-direction: column ;
    justify-content: space-evenly ;
    .blog{
        position: relative ;
        border: solid black 1px ;
        margin: 1rem 0 0 0 ;
        padding: .5rem 1.5rem ;
        cursor: pointer;
        transition: ease-in-out .15s ;
        z-index: 1 ;
        overflow: hidden ;
        max-width: 300px ;
        overflow: hidden ;
        box-shadow: 0px 2px 3px 1px rgba(0,0,0,.25) ;
        &::after{
            height: 100% ;
            width: 100% ;
            background-image: linear-gradient(to right, #000000, #350a21, #5e004a, #7f0083, #8b15cb);
            position: absolute ;
            top: 0 ;
            left: -100% ;
            z-index: -1;
            content: '' ;
            transition: ease-out .5s ;
        }
    }
    .blog:hover{
        color: ghostwhite ;
        &::after{
            left: 0 ;
        }
    }
`
export default MainLeftSide