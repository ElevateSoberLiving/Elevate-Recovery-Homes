import React, { useState, useEffect } from 'react'
import HeroSlide from './HeroSlide'
import Camping from '../Assets/Images/Stock-Group-Camping.jpg'
import Dancing from '../Assets/Images/Stock-Group-Dancing.jpg'
import GroupImg from '../Assets/Images/Stock-Group3.jpg'

function HeroSlider() {
    const [current, setCurrent] = useState(0)
    const sliderImgs = [Camping, Dancing, GroupImg]
    const length = sliderImgs.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    useEffect(()=>{
        let sliderTimer = setTimeout(nextSlide, 3000)

        return function (){
            clearTimeout(sliderTimer)
        }
    })
    
    return (
        <div className="hero-slider">
            {sliderImgs.map((slide, index) => {
                return <HeroSlide imageSrc={slide} key={index} index={index} current={current} />
            })}
        </div>
    )
}

export default HeroSlider