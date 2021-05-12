import React from 'react'
import Stock1 from '../Assets/Images/House-Img/Stock1.jpg'
import Stock2 from '../Assets/Images/House-Img/Stock2.jpg'
import Stock3 from '../Assets/Images/House-Img/Stock3.jpg'
import Stock4 from '../Assets/Images/House-Img/Stock4.jpg'

function TuftsHome() {
    return (
        <section className="admissions__tufts">
            <div className="admissions__tufts--header">
                <h2>TUFTS HOME</h2>
                <hr />
                <p>Our Men's Recovery Home is located in Englewood, Colorado. The beautiful, 2,300 square foot house features four bedrooms, two full baths, multiple living room areas, a home gym, a dedicated work desk with computer and printer, a hot tub, and a spacious backyard. It is truly a warm and family-friendly home. The Tufts Home is staffed with a dedicated 24/7 House Manager and Peer Recovery Coach. We have a zero-tolerance drug and alcohol policy and require our members to participate in House meetings and suggest a minimum of five (5) recovery based activities per week and follow all other rules of the House.</p>
            </div>
            <div className="admissions__tufts--img-container">
                <img id="stock-img1" src={Stock1} alt="stock house" />
                <img id="stock-img2" src={Stock2} alt="stock house" />
                <img id="stock-img3" src={Stock3} alt="stock house" />
                <img id="stock-img4" src={Stock4} alt="stock house" />
            </div>
        </section>
    )
}

export default TuftsHome
