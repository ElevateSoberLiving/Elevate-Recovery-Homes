import React from 'react'
import Stock from '../Assests/Stock-Pineapple.jpg'

function Splash() {
    return (
        <div className="splash">
            <div className="splash__title">
                <h1>Best Recovery Home In Colorado</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                <button className="splash__title--button">Action Item </button>
            </div>
            <div className="splash__wave"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#545488" fill-opacity="1" d="M0,320L60,277.3C120,235,240,149,360,128C480,107,600,149,720,154.7C840,160,960,128,1080,101.3C1200,75,1320,53,1380,42.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg></div>
            <img className="splash__image" src={Stock} alt="Stock pineapple" />
        </div>
    )
}

export default Splash
