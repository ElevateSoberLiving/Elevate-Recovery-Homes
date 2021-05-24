import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Logos/Elevate Logo Files/WEB/Elevate_Logo_Vertical_Color_RGB@2x.png'
import Group3 from '../Assets/Images/Stock-Group3.jpg'
import EmbedVideo from '../Components/EmbedVideo'
import Hero from '../Components/Hero'

function Home() {
    return (
        <div className="home">
            <Hero />
            <section className="home__first">
                <img className="home__first-image" src={Group3} alt="Group having fun" />
                <div >
                    <img className="home__first--logo" src={Logo} alt="Elevate Recovery Logo" />
                    <h2 className="home__first--header" >OUR PHILOSOPHY</h2>
                    <p>Obstacles to achieving and maintaining sobriety are numerous. One of them is finding the right place to bridge the gap between inpatient treatment and independent living. Even if you have not been in residential treatment, the first weeks of living on your own can be intimidating and treacherous.</p>
                    <p>Many circumstances and living situations are less than ideal for someone in the process of changing their entire life.</p>
                    <p>At Elevate, we provide a safe, supportive, and structured environment for men to thrive while they continue to get to know their true selves and create new meaningful lives.</p>
                </div>
            </section>
            <section className="home__second">
                <h2>OUR PHILOSOPHY</h2>
                <hr id="second-break" />
                <p>Our philosophy here at Elevate is just that to Elevate. Elevate ourselves mind, body and spirit. We take a modern approach, believing that there are a thousand paths to the place of lasting recovery. Everyone's journey is unique and special. We just guild you with the four pillars of our program: structure, accountability, support and action. You choose the path that best fits your recovery.</p>
                <p>At Elevate, our philosophy is built on four essential principles for successful long-term recovery: Structure, Accountability, Support, and Action.</p>
                <Link className="" to="/about/elevate-recovery-homes">About us philosophy</Link>
            </section>
            <section className="home__third">
                <EmbedVideo />
            </section>
        </div>
    )
}

export default Home
