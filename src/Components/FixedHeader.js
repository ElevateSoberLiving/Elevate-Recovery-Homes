import React, {useState} from 'react'
import Hamburger from './Hamburger'
import NavBar from './NavBar'

function FixedHeader() {
    return (
        <div className="fixed-header">
                <h3>LOGO</h3>
                <div className="fixed-header__menu">
                    <NavBar />
                    <Hamburger />
                </div>
        </div>
    )
}

export default FixedHeader
