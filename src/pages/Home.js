import React from 'react'
import Logo from '../Assets/Logos/Elevate Logo Files/WEB/Elevate_Logo_Vertical_Color_RGB@2x.png'

function Home() {
    return (
        <div>
            <img src={Logo} alt="Elevate Recovery Logo" />
            <div>
                <h2>Some Header</h2>
                <p>Obstacles to achieving and maintaining sobriety are numerous. One of them is finding the right place to bridge the gap between inpatient treatment and independent living. Even if you have not been in residential treatment, the first weeks of living on your own can be intimidating and treacherous.</p>
                <p>Many circumstances and living situations are less than ideal for someone in the process of changing their entire life.</p>
                <p>At Elevate, we provide a safe, supportive, and structured environment for men to thrive while they continue to get to know their true selves and create new meaningful lives.</p>
            </div>
        </div>
    )
}

export default Home
