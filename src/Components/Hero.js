import React from 'react'
import HeroSlider from './HeroSlider'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className="hero">
            <HeroSlider />
            <div className="hero__title">
                <h1 className="hero__title--header">DENVER’S PREMIER TRANSITIONAL LIVING COMMUNITY</h1>
                <p className="hero__title--body">need lines</p>
                <button className="hero__title--button"><Link to="/about/elevate-recovery-homes" >ABOUT US</Link></button>
            </div>
        </div>
    )
}

export default Hero
