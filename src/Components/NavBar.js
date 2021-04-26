import React from 'react'
import SubMenu from './SubMenu'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar__menu">
                <li >
                    <Link className="links" to="/" >Home</Link>
                </li>
                <li >
                    <Link className="links" to="/about">About Us</Link>
                    <SubMenu>
                        <li><Link to="/about/elevate-recovery-homes">Elevate Recovery Homes</Link></li>
                        <li><Link to="/about/our-team">Our Team</Link></li>
                    </SubMenu>
                </li>
                <li >
                    <Link className="links" to="/location">Location</Link>
                </li>
                <li >
                    <Link className="links" to="/program">Program</Link>
                    <SubMenu>
                        <li><Link to="/program/why-us">Why Us</Link></li>
                        <li><Link to="/program/what-to-expect">What To Expect</Link></li>
                        <li><Link to="/program/elevation-plan">Elevation Plan</Link></li>
                        <li><Link to="/program/vocational-training">Vocational Training</Link></li>
                    </SubMenu>
                </li>
                <li >
                    <Link className="links" to="/admissions">Admissions</Link>
                    <SubMenu>
                        <li><Link to="/admissions/facilities">Our Facilities</Link></li>
                        <li><Link to="/admissions/tufts-home">Tufts Home</Link></li>
                        <li><Link to="/admissions/admission-info">Admissions Info</Link></li>
                    </SubMenu>
                </li>
                <li >
                    <Link className="links" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
