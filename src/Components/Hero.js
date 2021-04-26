import React from 'react'
import HeroSlider from './HeroSlider'

function Hero() {
    return (
        <div className="hero">
            <HeroSlider />
            <div className="hero__title">
                <h1 className="hero__title--header">Best Recovery Home In Colorado</h1>
                <p className="hero__title--body"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                <button className="hero__title--button">Contact Us</button>
            </div>
        </div>
    )
}

export default Hero
