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
                    <h2 className="home__first--header" >DENVER’S PREMIER TRANSITIONAL LIVING COMMUNITY FOR ADULT MEN</h2>
                    <p>Elevate Recovery Homes is a transitional community for adult men who have struggled with substance use and addiction and who have completed primary treatment, are currently in IOP, recently released from detox, or participated in other interventions.<br/><br/> Our typical member is looking for a supportive environment to strengthen their recovery, prevent relapse and integrate newly acquired skills into everyday life.<br/><br/> We provide a safe, supportive, and structured environment focused on helping members develop the independent living skills necessary to transition into a healthier lifestyle successfully. We know that the needs of adult men are unique, so we have developed our community specifically to meet those needs.</p>
                </div>
            </section>
            <section className="home__second">
                <h2>OUR PHILOSOPHY</h2>
                <hr id="second-break" />
                {/* <p>Our philosophy here at Elevate is just that to Elevate. Elevate ourselves mind, body and spirit. We take a modern approach, believing that there are a thousand paths to the place of lasting recovery. Everyone's journey is unique and special. We just guild you with the four pillars of our program: structure, accountability, support and action. You choose the path that best fits your recovery.</p> */}
                <p>At Elevate, our philosophy is built on four essential principles for successful long-term recovery: Structure, Accountability, Support, and Action.</p>
                <Link className="" to="/about/elevate-recovery-homes">About us philosophy</Link>
            </section>
            <section className="home__third">
                <h2>WHY CHOOSE US</h2>
                <p><b>“IF YOU DON’T KNOW WHERE YOU’RE GOING, ANY ROAD WILL TAKE YOU THERE”</b></p>
                <Link to="/program/why-us">OUR TEAM</Link>
            </section>
            <section className="home__fourth">
                <h2>LOCATION</h2>
                <p>Elevate is located just minutes from Denver’s beautiful Front Range in Englewood—an ideal neighborhood for men looking for a fresh start.</p>
                <Link to="/location">LOCATION</Link>
            </section>
            <section className="home__fifth">
                <h2>THE TEAM</h2>
                <p>We believe in individualized support through meaningful relationships. With mentorship, peer-to-peer connections, and available clinical support, we help members set goals and achieve them.</p>
                <Link to="/program/why-us">OUR TEAM</Link>
            </section>
            <section className="home__sixth">
                <h2>FROM ADDICTION TO SELF-RELIANCE</h2>
                <p>Elevate Recovery Homes is a transitional community for adult men ready to create a sober life. The community is based on the model used by Founder Bryce Givens during his journey from addiction to recovery. The foundation of the community focuses on mentorship, community as a method, peer-to-peer accountability, and commitment towards achieving one’s goals.</p>
                <p><b>“It is much easier to change how you think by changing your behavior than it is to change your behavior by changing how you think. Act out the change you seek.”</b></p>
                <Link to="/program/why-us">A Letter From Bryce</Link>
            </section>
            <section className="home__seventh">
                <h2>THE HOUSE</h2>
                <EmbedVideo />
                <Link to="/admissions/tufts-home">More About Tufts Home</Link>
            </section>
            <section className="home__eighth">
                <h2>GET IN TOUCH</h2>
                <Link to="/contact">Contact</Link>
            </section>
        </div>
    )
}

export default Home
