import React from 'react';
import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';

function Main() {

    const loginToken = sessionStorage.getItem('loginToken');
    return (
        <div>
            {loginToken ? <MainPage /> : <HomePage />}
        </div>
    )
}

export default Main
