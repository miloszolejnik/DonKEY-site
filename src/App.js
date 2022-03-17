import React from 'react';
import Home from './pages/Home';
import MainPage from './pages/MainPage';

export default function App() {

    const loginToken = sessionStorage.getItem("loginToken");

    function render() {
        if (loginToken) {
            return < MainPage />
        } else {
            return < Home />
        }
    }

    return (
        render()
    )
}
