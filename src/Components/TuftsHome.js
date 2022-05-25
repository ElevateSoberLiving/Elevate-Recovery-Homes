import React from 'react'
import EmbedVideo from './EmbedVideo'
import TuftsElevateLiving from '../Assets/Images/Tuft-House-Img/TuftsElevateLiving-min.jpg'
import TuftsElevateKit from '../Assets/Images/Tuft-House-Img/TuftsElevateKit-min.jpg'
import TuftsElevateFront from '../Assets/Images/Tuft-House-Img/TuftsElevateFront-min.jpg'
import TuftsElevateBath from '../Assets/Images/Tuft-House-Img/TuftsElevateBath-min.jpg'
import TuftsElevateSmBed from '../Assets/Images/Tuft-House-Img/TuftsElevateSmBed-min.jpg'
import TuftsElevateChicken from '../Assets/Images/Tuft-House-Img/TuftsElevateChicken-min.jpg'

function TuftsHome() {
    return (
        <section className="admissions__houses">
            <div className="admissions__houses--header">
                <h2>TUFTS HOME</h2>
                <hr />
                <p>The Tufts Home is located in Englewood, Colorado. The beautiful 2,400 square foot house features five bedrooms, two full baths, multiple living room areas, a dedicated work desk with computer and printer, and a spacious backyard. It is a truly warm and family-friendly home. The Tufts Home is staffed with a dedicated 24/7 House Manager and Peer Recovery Coach. We have a zero-tolerance drug and alcohol policy and require our members to participate in house meetings and suggest a minimum of five (5) recovery-based activities per week and follow all other house rules.</p>
            </div>
            <div className="admissions__houses--img-container">
                <img id="house-img1" src={ TuftsElevateLiving } alt="stock house" />
                <img id="house-img2" src={ TuftsElevateKit } alt="stock house" />
                <img id="house-img3" src={ TuftsElevateFront } alt="stock house" />
                <img id="house-img4" src={ TuftsElevateBath } alt="stock house" />
                <img id="house-img5" src={ TuftsElevateSmBed } alt="stock house" />
                <img id="house-img6" src={ TuftsElevateChicken } alt="stock house" />
            </div>
            <div className="admissions__houses--vid-container">
                <EmbedVideo videoId={ "https://www.youtube.com/watch?v=mJBBOGuYFIs" } />
            </div>
        </section>
    )
}

export default TuftsHome
