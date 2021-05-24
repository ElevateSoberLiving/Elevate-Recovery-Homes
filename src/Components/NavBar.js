import React from 'react'
import SubMenu from './SubMenu'
import { Link } from 'react-router-dom'

function NavBar({ showMenu, setShowMenu }) {

    return (
        <nav className={`navbar${showMenu ? '' : `--active`}`}>
            
            <ul className="navbar__menu">
                <li >
                    <Link className="links" to="/" onClick={setShowMenu} >HOME</Link>
                </li>
                <li className="links-container" >
                    <Link className="links" >ABOUT US</Link>
                    <SubMenu>
                        <li ><Link className="links sublinks" to="/about/elevate-recovery-homes" onClick={setShowMenu} >ELEVATE RECOVERY HOMES</Link></li>
                        <li ><Link className="links sublinks" to="/about/our-team" onClick={setShowMenu} >OUR TEAM</Link></li>
                    </SubMenu>
                </li>
                <li >
                    <Link className="links" to="/location" onClick={setShowMenu} >LOCATION</Link>
                </li>
                <li className="links-container">
                    <Link className="links" >SERVICES</Link>
                    <SubMenu>
                        <li ><Link className="links sublinks" to="/program/why-us" onClick={setShowMenu} >WHY US</Link></li>
                        <li ><Link className="links sublinks" to="/program/what-to-expect" onClick={setShowMenu} >WHAT TO EXPECT</Link></li>
                        <li ><Link className="links sublinks" to="/program/elevation-plan" onClick={setShowMenu} >ELEVATION PLAN</Link></li>
                        <li ><Link className="links sublinks" to="/program/vocational-training" onClick={setShowMenu} >VOCATIONAL TRAINING</Link></li>
                    </SubMenu>
                </li>
                <li className="links-container">
                    <Link className="links" >ADMISSIONS</Link>
                    <SubMenu>
                        <li ><Link className="links sublinks" to="/admissions/community" onClick={setShowMenu} >OUR COMMUNITY</Link></li>
                        <li ><Link className="links sublinks" to="/admissions/tufts-home" onClick={setShowMenu} >TUFTS HOME</Link></li>
                        <li ><Link className="links sublinks" to="/admissions/admission-info" onClick={setShowMenu} >ADMISSIONS INFO</Link></li>
                    </SubMenu>
                </li>
                <li >
                    <Link className="links" to="/faq" onClick={setShowMenu}>FAQ</Link>
                </li>
                <li >
                    <Link className="links" to="/contact" onClick={setShowMenu}>CONTACT</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
