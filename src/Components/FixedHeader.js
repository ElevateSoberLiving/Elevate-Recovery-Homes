import React, {useState} from 'react'
import Logo from '../Assets/Logos/Elevate Logo Files/WEB/Elevate_Logo_Horizontal_Color_RGB@2x.png'
import Hamburger from './Hamburger'
import NavBar from './NavBar'

function FixedHeader() {
    return (
        <div className="fixed-header">
                <img className="fixed-header__logo" src={Logo} alt="Elevate Recovery Homes Logo"/>
                <div className="fixed-header__menu">
                    <NavBar />
                    <Hamburger />
                </div>
        </div>
    )
}

export default FixedHeader
