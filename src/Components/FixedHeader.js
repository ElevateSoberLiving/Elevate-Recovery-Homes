import React, { useState } from 'react'
import LogoBlack from '../Assets/Logos/Elevate Logo Files/WEB/Elevate_Logo_Horizontal_Color_RGB@2x.png'
import LogoWhite from '../Assets/Logos/Elevate Logo Files/WEB/Elevate_Logo_Horizontal_White02_RGB@2x.png'
import LogoAllWhite from '../Assets/Logos/Elevate Logo Files/WEB/Elevate_Logo_Horizontal_White01_RGB@2x.png'
import Hamburger from './Hamburger'
import NavBar from './NavBar'

function FixedHeader() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="fixed-header">
            <img className="fixed-header__logo" src={LogoWhite} alt="Elevate Recovery Homes Logo" />
            <div className="fixed-header__menu">
                <div className="background"></div>
                <div className={`menu-background${showMenu ? `--active` : ''}`}></div>
                <NavBar showMenu={showMenu} setShowMenu={setShowMenu} />
                <Hamburger showMenu={showMenu} setShowMenu={setShowMenu}/>
            </div>
        </div>
    )
}

export default FixedHeader
