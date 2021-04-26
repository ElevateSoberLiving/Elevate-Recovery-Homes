import React from 'react'
import SubMenu from './SubMenu'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar__menu">
                <li >
                    <Link className="links" to="/" >Home</Link>
                    <SubMenu>
                        
                    </SubMenu>
                </li>
                <li >
                    <Link className="links" to="/about">About Us</Link>
                </li>
                <li >
                    <Link className="links" to="/location">Location</Link>
                </li>
                <li >
                    <Link className="links" to="/program">Program</Link>
                </li>
                <li >
                    <Link className="links" to="/admissions">Admissions</Link>
                </li>
                <li >
                    <Link className="links" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
