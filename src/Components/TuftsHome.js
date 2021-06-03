import React from 'react'
import ElevateLiving from '../Assets/Images/House-Img/ElevateLiving.jpg'
import ElevateKit from '../Assets/Images/House-Img/ElevateKit.jpg'
import ElevateFront from '../Assets/Images/House-Img/ElevateFront.jpg'
import ElevateBath from '../Assets/Images/House-Img/ElevateBath.jpg'
import ElevateSmBed from '../Assets/Images/House-Img/ElevateSmBed.jpg'
import ElevateChicken from '../Assets/Images/House-Img/ElevateChicken.jpg'

function TuftsHome() {
    return (
        <section className="admissions__tufts">
            <div className="admissions__tufts--header">
                <h2>TUFTS HOME</h2>
                <hr />
                <p>Our Men's Recovery Home is located in Englewood, Colorado. The beautiful, 2,300 square foot house features four bedrooms, two full baths, multiple living room areas, a home gym, a dedicated work desk with computer and printer, a hot tub, and a spacious backyard. It is truly a warm and family-friendly home. The Tufts Home is staffed with a dedicated 24/7 House Manager and Peer Recovery Coach. We have a zero-tolerance drug and alcohol policy and require our members to participate in House meetings and suggest a minimum of five (5) recovery based activities per week and follow all other rules of the House.</p>
            </div>
            <div className="admissions__tufts--img-container">
                <img id="living-img1" src={ElevateLiving} alt="stock house" />
                <img id="kitchen-img2" src={ElevateKit} alt="stock house" />
                <img id="front-house-img3" src={ElevateFront} alt="stock house" />
                <img id="bathroom-img4" src={ElevateBath} alt="stock house" />
                <img id="small-bed-img5" src={ElevateSmBed} alt="stock house" />
                <img id="chicken-img6" src={ElevateChicken} alt="stock house" />
            </div>
        </section>
    )
}

export default TuftsHome
