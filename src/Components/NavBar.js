import React from 'react'
import SubMenu from './SubMenu'
import { Link } from 'react-router-dom'


function NavBar({ showMenu, setShowMenu }) {

    return (
        <nav className={showMenu ? 'navbar active' : 'navbar'}>
            <ul className="navbar__menu">
                <li className={showMenu ? "links-container active" : 'links-container'}>
                    <Link className="links" to="/" onClick={setShowMenu} >HOME</Link>
                </li>
                <li className={showMenu ? "links-container active" : 'links-container'} >
                    <Link className="links sublinks" to="/program/why-us" onClick={setShowMenu} >WHY US</Link>
                    <SubMenu >
                        <li ><Link className="links sublinks" to="/about/our-team" onClick={setShowMenu} >OUR TEAM</Link></li>
                    </SubMenu>
                </li>
                <li className={showMenu ? "links-container active" : 'links-container'}>
                    <Link className="links" to="/location" onClick={setShowMenu} >LOCATION</Link>
                </li>
                <li className={showMenu ? "links-container active" : 'links-container'}>
                    <Link className="links" to="/program/elevation-plan" onClick={setShowMenu}>ELEVATION PLAN</Link>
                    <SubMenu>
                        <li ><Link className="links sublinks" to="/program/what-to-expect" onClick={setShowMenu} >WHAT TO EXPECT</Link></li>
                        <li ><Link className="links sublinks" to="/program/vocational-training" onClick={setShowMenu} >VOCATIONAL TRAINING</Link></li>
                    </SubMenu>
                </li>
                <li className={showMenu ? "links-container active" : 'links-container'}>
                    <Link className="links " to="/admissions/admission-info" onClick={setShowMenu} >ADMISSIONS INFO</Link>
                    <SubMenu>
                        <li ><Link className="links sublinks" to="/admissions/community" onClick={setShowMenu} >OUR COMMUNITY</Link></li>
                        <li ><Link className="links sublinks" to="/admissions/tufts-home" onClick={setShowMenu} >TUFTS HOME</Link></li>
                    </SubMenu>
                </li>
                <li className={showMenu ? "links-container active" : 'links-container'}>
                    <Link className="links" to="/faq" onClick={setShowMenu}>FAQ</Link>
                </li>
                <li className={showMenu ? "links-container active" : 'links-container'}>
                    <Link className="links" to="/contact" onClick={setShowMenu}>CONTACT</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
