import React, { useContext, useEffect } from 'react'
import "./header.css"
import {  NavLink } from "react-router-dom"

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