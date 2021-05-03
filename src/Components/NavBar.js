import React from 'react'
import SubMenu from './SubMenu'
import { Link } from 'react-router-dom'

function NavBar({ showMenu }) {
    return (
        <nav className={`navbar${showMenu ? '' : `--active`}`}>
            
            <ul className="navbar__menu">
                <li >
                    <Link className="links" to="/" >Home</Link>
                </li>
                <li className="links-container" >
                    <Link className="links" to="/about">About Us</Link>
                    <SubMenu>
                        <li ><Link className="links sublinks" to="/about/elevate-recovery-homes">Elevate Recovery Homes</Link></li>
                        <li ><Link className="links sublinks" to="/about/our-team">Our Team</Link></li>
                    </SubMenu>
                </li>
                <li >
                    <Link className="links" to="/location">Location</Link>
                </li>
                <li className="links-container">
                    <Link className="links" to="/program">Program</Link>
                    <SubMenu>
                        <li ><Link className="links sublinks" to="/program/why-us">Why Us</Link></li>
                        <li ><Link className="links sublinks" to="/program/what-to-expect">What To Expect</Link></li>
                        <li ><Link className="links sublinks" to="/program/elevation-plan">Elevation Plan</Link></li>
                        <li ><Link className="links sublinks" to="/program/vocational-training">Vocational Training</Link></li>
                    </SubMenu>
                </li>
                <li className="links-container">
                    <Link className="links" to="/admissions">Admissions</Link>
                    <SubMenu>
                        <li ><Link className="links sublinks" to="/admissions/facilities">Our Facilities</Link></li>
                        <li ><Link className="links sublinks" to="/admissions/tufts-home">Tufts Home</Link></li>
                        <li ><Link className="links sublinks" to="/admissions/admission-info">Admissions Info</Link></li>
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
