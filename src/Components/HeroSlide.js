import React from 'react'

function HeroSlide({ current, index, imageSrc }) {
    return (
        <div className={current === index ? 'hero__slider--image--active' : 'hero__slider--image' }>
            {current === index && <img src={imageSrc} alt="stock having fun" className="hero__image" />}
        </div>
    )
}

export default HeroSlide
