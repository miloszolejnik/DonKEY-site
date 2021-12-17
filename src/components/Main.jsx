import React from 'react'
import { useLocation } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

function Main() {
    return (
        <Routes>
            <Route exatct path="/" element={<HomePage />} />
        </Routes>
    )
}

export default Main
