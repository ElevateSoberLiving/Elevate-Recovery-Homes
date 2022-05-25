import React from 'react'
import EmbedVideo from './EmbedVideo'
import WinonaHouseLiving from '../Assets/Images/Winona-House-Img/WinonaHouseLiving-min.jpg'
import WinonaHouseKitchen from '../Assets/Images/Winona-House-Img/WinonaHouseKitchen-min.jpg'
import WinonaHouseBaseLiving from '../Assets/Images/Winona-House-Img/WinonaHouseBaseLiving-min.jpg'
import WinonaHouseBaseKit from '../Assets/Images/Winona-House-Img/WinonaHouseBaseKit-min.jpg'
import WinonaHouseBedroom from '../Assets/Images/Winona-House-Img/WinonaHouseBedroom1-min.jpg'
import WinonaHouseBath from '../Assets/Images/Winona-House-Img/WinonaHouseBath-min.jpg'


function WinonaHome() {
    return (
        <section className="admissions__houses">
            <div className="admissions__houses--header">
                <h2>WINONA HOME</h2>
                <hr />
                <p>The Winona Home is located in Westminster, Colorado. This duplex-style home has ample room to satisfy your transitional housing needs. With over 2,500 square feet, this house features five bedrooms, two full baths, multiple living room areas, multiple dining room areas, and a spacious backyard with covered storage and home gym equipment. It is a fantastic home to create fellowship on your journey to recovery. The Winona Home has a full-time house manager and offers several peer recovery coaches. We have a zero-tolerance drug and alcohol policy and require our members to participate in house meetings and suggest a minimum of five (5) recovery-based activities per week and follow all other house rules.</p>
            </div>
            <div className="admissions__houses--img-container">
                <img id="house-img1" src={WinonaHouseLiving} alt="stock house" />
                <img id="house-img2" src={WinonaHouseKitchen} alt="kitchen" />
                <img id="house-img3" src={WinonaHouseBaseLiving} alt="basement living room" />
                <img id="house-img4" src={WinonaHouseBaseKit} alt="basement kitchen" />
                <img id="house-img5" src={WinonaHouseBedroom} alt="winona house bedroom" />
                <img id="house-img6" src={WinonaHouseBath} alt="winona house bathroom" />
            </div>
            <div className="admissions__houses--vid-container">
                <EmbedVideo videoId={"https://www.youtube.com/watch?v=aOhvgPp7dfQ"} />
            </div>
        </section>
    )
}


export default WinonaHome
