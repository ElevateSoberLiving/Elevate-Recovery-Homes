import React from 'react'
import { Link } from 'react-router-dom'
import RedRocks from '../Assets/Images/Redrocks-min.jpg'

function WhatToExpect() {
    return (
        <section className="program__what-to-expect">
            <img src={RedRocks} id="redrocks" alt="Red Rocks mountains"/>
            <h2>WHAT YOU CAN EXPECT</h2>
            <hr/>
            <p>Like life, everything at Elevate Recovery is progressive, with challenges, expectations, and responsibilities increasing as members make healthy choices for themselves. You can expect to immediately feel the love and support as soon as you enter into one of our homes. Someone who has been in the same shoes as you will be there to help guide you through. You can expect us to help with the same passion and purpose that has gotten us to where we are in our recovery. Our community will provide a safe environment for you to <b>HEAL</b>, <b>GROW</b>, and <b>DEVELOP</b> the practices for living a <b>HEALTHY</b> and <b>FULL LIFE</b>. Every resource we have available will be at your disposal. At Elevate, we don’t have clients; we have members because everyone is treated like family.</p>
            <br/>
            <p>Elevate is an achievement-based community with levels that all members progress through. Each level has specific tasks and <b>GOALS</b> that allow members to increase their level of responsibility. <b>GOALS</b> are designed to move members toward increasing <b>INDEPENDENCE</b>, personal responsibility, financial freedom, and self-discovery. Each challenge allows members to experience and integrate into their decision-making the daily living skills necessary for independence.</p>
            <br/>
            <p>Our community staff has expertise in physical, emotional, social, intellectual, and spiritual development and coaching. We have an on-staff nutritionist, personal trainer, weightlifting coach, certified addiction counselor (CACIII), meditation coach, and spiritual development coaches. We also have a vast network of resources to support your progression with employment, life skills development, abuse counseling, and alternative sober advocates.</p>
            <button><Link id="expect-link" to="/contact">Contact Us</Link></button>
        </section>
    )
}

export default WhatToExpect
