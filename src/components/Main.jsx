import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

function Main() {
    return (
        <Routes>
            <Route exatct path="/" element={<HomePage />} />
            <Route exatct path="/login" element={<LoginPage />} />
            <Route exatct path="/register" element={<RegisterPage />} />
        </Routes>
    )
}

export default Main
