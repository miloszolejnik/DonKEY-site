import React from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Main from './components/Main'

export default function App() {

    const location = useLocation();
    return (
        <div>
            <Nav location={location} />
            <Main />
        </div>
    )
}
