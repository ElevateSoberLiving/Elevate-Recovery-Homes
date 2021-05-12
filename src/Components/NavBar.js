import React from 'react'
import SubMenu from './SubMenu'
import { Link } from 'react-router-dom'

function NavBar({ showMenu }) {
    return (
        <nav className={`navbar${showMenu ? '' : `--active`}`}>
            
            <ul className="navbar__menu">
                <li >
                    <Link className="links" to="/" >HOME</Link>
                </li>
                <li className="links-container" >
                    <Link className="links" >ABOUT US</Link>
                    <SubMenu>
                        <li ><Link className="links sublinks" to="/about/elevate-recovery-homes">ELEVATE RECOVERY HOMES</Link></li>
                        <li ><Link className="links sublinks" to="/about/our-team">OUR TEAM</Link></li>
                    </SubMenu>
                </li>
                <li >
                    <Link className="links" to="/location">LOCATION</Link>
                </li>
                <li className="links-container">
                    <Link className="links" >SERVICES</Link>
                    <SubMenu>
                        <li ><Link className="links sublinks" to="/program/why-us">WHY US</Link></li>
                        <li ><Link className="links sublinks" to="/program/what-to-expect">WHAT TO EXPECT</Link></li>
                        <li ><Link className="links sublinks" to="/program/elevation-plan">ELEVATION PLAN</Link></li>
                        <li ><Link className="links sublinks" to="/program/vocational-training">VOCATIONAL TRAINING</Link></li>
                    </SubMenu>
                </li>
                <li className="links-container">
                    <Link className="links" >ADMISSIONS</Link>
                    <SubMenu>
                        <li ><Link className="links sublinks" to="/admissions/community">OUR COMMUNITY</Link></li>
                        <li ><Link className="links sublinks" to="/admissions/tufts-home">TUFTS HOME</Link></li>
                        <li ><Link className="links sublinks" to="/admissions/admission-info">ADMISSIONS INFO</Link></li>
                    </SubMenu>
                </li>
                <li >
                    <Link className="links" to="/contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
