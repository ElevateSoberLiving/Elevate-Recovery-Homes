import React from 'react'
import { Link } from 'react-router-dom'
import FoggyMountains from '../Assets/Images/FoggyMountains-min.png'

function Hero() {
    return (
        <div className="hero">
            <img src={FoggyMountains} alt="Mountain peaks above the clouds" />
            <div className="hero__title">
                <h1 className="hero__title--header"><span>F</span>INISH <span>T</span>HE <span>J</span>OURNEY <span>Y</span>OU <span>S</span>TARTED</h1>
                <hr/>
                <Link className="hero__title--button" to="/program/why-us" >WHY US</Link>
            </div>
        </div>
    )
}

export default Hero
