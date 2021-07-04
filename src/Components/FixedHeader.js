import React, { useState } from 'react'
import LogoWhite from '../Assets/Logos/Elevate Logo Files/WEB/Elevate_Logo_Horizontal_White02_RGB@2x.png'
import Hamburger from './Hamburger'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

function FixedHeader() {
    const [showMenu, setShowMenu] = useState(false)

    const handleClick = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className="fixed-header">
            <div className="fixed-header__left">
                <Link  to="/">
                    <img className="fixed-header__logo" src={LogoWhite} alt="Elevate Recovery Homes Logo" />
                </Link>
                <div>
                    <a id="call-us" href="tel:+17203003861">
                        <h3>CALL US</h3>
                        <h4>(720) 300-3861</h4>
                    </a>
                </div>
            </div>
            <div className="fixed-header__menu">
                <div className={showMenu ? `menu-background active-back` : 'menu-background'}></div>
                <NavBar showMenu={showMenu} setShowMenu={handleClick} />
                <Hamburger showMenu={showMenu} setShowMenu={handleClick} />
            </div>
        </div>
    )
}

export default FixedHeader
