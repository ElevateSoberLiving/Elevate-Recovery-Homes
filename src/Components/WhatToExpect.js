import React from 'react'
import { Link } from 'react-router-dom'

function WhatToExpect() {
    return (
        <section className="program__what-to-expect">
            <h2>What You Can Expect</h2>
            <p>Like life, everything at Elevate Recovery is progressive, with challenges, expectations, and responsibilities increasing as members make healthy choices for themselves. You can expect to immediately feel the love and support as soon as you enter into one of our homes. Someone who has been in the same shoes as you will be there to help guide you through. You can expect us to help with the same passion and purpose that has gotten us to where we are in our recovery. A safe environment will be provided for you to heal, grow, and develop the practices for living a healthy and full life. Every resource we have available will be at your disposal. At Elevate we don’t have clients, we have members because everyone is treated like family.</p>
            <p>Elevate is an achievement-based program with three levels that all members progress through. Each level has specific tasks and goals that allow members to increase their level of responsibility while earning additional privileges. Goals are designed to move members toward increasing independence, personal responsibility, financial freedom, and self-discovery. Each challenge allows members to experience and integrate into their decision-making the daily living skills necessary for independence. Staff guide and challenge members to predict and consider consequences (positive and negative), identify resources, ask for help, improve interpersonal skills, practice problem solving, effectively communicate, demonstrate time management and engage in healthy decision making.</p>
            <p>Our program staff has expertise in physical, emotional, social, intellectual, and spiritual development and coaching. We have an in-house nutritionist, personal trainer, weightlifting coach, certified addiction counselor (CACIII), meditation coach, and spiritual development coaches. We also have a vast network of resources to support your progression with employment, life skills development, abuse counseling, and alternative sober advocates.</p>
            <button><Link to="/contact">Contact Us</Link></button>
        </section>
    )
}

export default WhatToExpect
