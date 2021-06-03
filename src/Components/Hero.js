import React from 'react'
import { Link } from 'react-router-dom'
import FoggyMountains from '../Assets/Images/FoggyMountains.png'

function Hero() {
    return (
        <div className="hero">
            <img src={FoggyMountains} alt="Mountain peaks above the clouds" />
            <div className="hero__title">
                <h1 className="hero__title--header"><span>F</span>INISH <span>T</span>HE <span>J</span>OURNEY <span>Y</span>OU <span>S</span>TARTED</h1>
                <hr/>
                <p className="hero__title--body"><b>“IF YOU DON’T KNOW WHERE YOU’RE GOING, ANY ROAD WILL TAKE YOU THERE”</b></p>
                <Link className="hero__title--button" to="/about/elevate-recovery-homes" >ABOUT US</Link>
            </div>
        </div>
    )
}

export default Hero
