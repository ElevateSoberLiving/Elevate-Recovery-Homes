import React from 'react'
import EmbedVideo from './EmbedVideo'
import PenroseHouseLiving from '../Assets/Images/Penrose-House-Img/PenroseHouseLiving-min.jpg'
import PenroseHouseBed1 from '../Assets/Images/Penrose-House-Img/PenroseHouseBed1-min.jpg'
import PenroseHouseLiving2 from '../Assets/Images/Penrose-House-Img/PenroseHouseLiving2-min.jpg'
import PenroseHouseKitchen from '../Assets/Images/Penrose-House-Img/PenroseHouseKitchen-min.jpg'
import PenroseHouseBath from '../Assets/Images/Penrose-House-Img/PenroseHouseBath-min.jpg'
import PenroseHouseBed2 from '../Assets/Images/Penrose-House-Img/PenroseHouseBed2-min.jpg'

function PenroseHome() {
    return (
        <section className="admissions__houses">
            <div className="admissions__houses--header">
                <h2>PENROSE HOME</h2>
                <hr />
                <p>The Penrose Home is located in Centennial, Colorado. This very spacious, beautiful 4,800 square foot house features nine bedrooms, five full baths, multiple living room areas, multiple dining rooms, and a large backyard. It is a fantastic place to develop friendships and hone in on your path to recovery. The Penrose Home has a full-time house manager and offers several peer recovery coaches you can choose to work with. We have a zero-tolerance drug and alcohol policy and require our members to participate in house meetings and suggest a minimum of five (5) recovery-based activities per week and follow all other house rules.</p>
            </div>
            <div className="admissions__houses--img-container">
                <img id="house-img1" src={ PenroseHouseLiving } alt="Elevate sober living house's living room at Penrose" />
                <img id="house-img2" src={ PenroseHouseBed1 } alt="Elevate sober living house's bedroom at Penrose" />
                <img id="house-img3" src={ PenroseHouseLiving2 } alt="Elevate sober living house's second living room at Penrose" />
                <img id="house-img4" src={ PenroseHouseKitchen } alt="Elevate sober living house's kitchen at Penrose" />
                <img id="house-img5" src={ PenroseHouseBath } alt="Elevate sober living house's bathroom at Penrose" />
                <img id="house-img6" src={ PenroseHouseBed2 } alt="Elevate sober living house's bedroom at Penrose" />
            </div>
            <div className="admissions__houses--vid-container">
                <EmbedVideo videoId={ "https://www.youtube.com/watch?v=v2lWrRRQ9Gk" } />
            </div>
        </section>
    )
}

export default PenroseHome
