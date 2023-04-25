import React, { useContext, useEffect } from 'react'
import "./header.css"
import {  NavLink } from "react-router-dom"
const URL="http://localhost:8009/";


const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/" className="name"><h1>Mobilicis</h1></NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header