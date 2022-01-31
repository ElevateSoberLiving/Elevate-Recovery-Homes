import React from 'react'
import ElevateLivingTwo from '../Assets/Images/Ridge-Road-House-Img/ElevateRidgeRoadArvadaLiving2.min.jpg'
import ElevateBedroomOne from '../Assets/Images/Ridge-Road-House-Img/ElevateRidgeRoadArvadaBed1.min.jpg'
import ElevateBedroomTwo from '../Assets/Images/Ridge-Road-House-Img/ElevateRidgeRoadArvadaBed2.min.jpg'
import ElevateKitchen from '../Assets/Images/Ridge-Road-House-Img/ElevateRidgeRoadArvadaKitchen.min.jpg'
import ElevateLivingOne from '../Assets/Images/Ridge-Road-House-Img/ElevateRidgeRoadArvadaLiving1.min.jpg'
import ElevateLivingFour from '../Assets/Images/Ridge-Road-House-Img/ElevateRidgeRoadArvadaLiving4.min.jpg'

function RidgeRoadHome() {
    return (
        <section className="admissions__tufts">
            <div className="admissions__tufts--header">
                <h2>RIDGE ROAD HOME</h2>
                <hr />
                <p>Our Men's Recovery Home is located in Englewood, Colorado. The beautiful 2,300 square foot house features four bedrooms, two full baths, multiple living room areas, a home gym, a dedicated work desk with computer and printer, and a spacious backyard. It is a truly warm and family-friendly home. The Tufts Home is staffed with a dedicated 24/7 House Manager and Peer Recovery Coach. We have a zero-tolerance drug and alcohol policy and require our members to participate in House meetings and suggest a minimum of five (5) recovery-based activities per week and follow all other House rules.</p>
            </div>
            <div className="admissions__tufts--img-container">
                <img id="living-img1" src={ElevateLivingTwo} alt="Elevate sober living house's living room at Ridge Road Arvada, CO" />
                <img id="kitchen-img2" src={ElevateBedroomOne} alt="Elevate sober living house's bedroom at Ridge Road Arvada, CO" />
                <img id="front-house-img3" src={ElevateBedroomTwo} alt="Elevate sober living house's bedroom at Ridge Road Arvada, CO" />
                <img id="bathroom-img4" src={ElevateKitchen} alt="Elevate sober living house's bedroom at Ridge Road Arvada, CO" />
                <img id="small-bed-img5" src={ElevateLivingOne} alt="Elevate sober living house's living room at Ridge Road Arvada, CO" />
                <img id="chicken-img6" src={ElevateLivingFour} alt="Elevate sober living house's living room at Ridge Road Arvada, CO" />
            </div>
        </section>
    )
}

export default RidgeRoadHome
