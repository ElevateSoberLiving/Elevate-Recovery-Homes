import React from 'react'
import HeroSlider from './HeroSlider'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className="hero">
            <HeroSlider />
            <div className="hero__title">
                <h1 className="hero__title--header">DENVER’S PREMIER TRANSITIONAL LIVING COMMUNITY FOR ADULT MEN</h1>
                <p className="hero__title--body">Elevate Recovery Homes is a transitional community for adult men who have struggled with substance use and addiction and who have completed primary treatment, are currently in IOP, recently released from detox, or participated in other interventions. Our typical member is looking for a supportive environment to strengthen their recovery, prevent relapse and integrate newly acquired skills into everyday life. We provide a safe, supportive, and structured environment focused on helping members develop the independent living skills necessary to transition into a healthier lifestyle successfully. We know that the needs of adult men are unique, so we have developed our community specifically to meet those needs.</p>
                <button className="hero__title--button"><Link to="/about/elevate-recovery-homes" >ABOUT US</Link></button>
            </div>
        </div>
    )
}

export default Hero
