import React from 'react'
import Camping from '../Assets/Images/Stock-Group-Camping.jpg'
import Dancing from '../Assets/Images/Stock-Group-Dancing.jpg'
import GroupImg from '../Assets/Images/Stock-Group3.jpg'

function HeroSlider() {
    const sliderImgs = [Camping, Dancing, GroupImg]

    return (
        <div>
            <img className="hero__slider--image" src={Dancing} alt="Group of People Dancing"/>
        </div>
    )
}

export default HeroSlider