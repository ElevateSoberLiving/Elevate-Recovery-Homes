import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Logos/Elevate Logo Files/WEB/Elevate_Logo_Vertical_Color_RGB@2x.png'
import Mountains from '../Assets/Images/MountainLine-min.png'
import LookingComputer from '../Assets/Images/Looking-at-Computer-min.jpg'
import Hiking from '../Assets/Images/Guy-Hiking-min.jpg'
import HikingDesert from '../Assets/Images/Hiking-Desert-min.jpg'
import EmbedVideo from '../Components/EmbedVideo'
import Hero from '../Components/Hero'
import { FaArrowRight } from 'react-icons/fa'
// import Tour from '../Assets/Video/Tour.mp4'

function Home() {
    return (
        <div className="home">
            <Hero />
            <section className="home__first">
                <img className="home__first-image" src={HikingDesert} alt="Hiking in the desert" />
                <div >
                    <img className="home__first--logo" src={Logo} alt="Elevate Recovery Logo" />
                    <h2 className="home__first--header" >DENVER’S PREMIER TRANSITIONAL LIVING COMMUNITY FOR ADULT MEN</h2>
                    <p>Elevate Recovery Homes is a transitional community for adult men who have struggled with substance use and addiction and who have completed primary treatment, are currently in IOP, recently released from detox, or participated in other interventions.<br /><br /> Our typical member is looking for a supportive environment to strengthen their recovery, prevent relapse and integrate newly acquired skills into everyday life.<br /><br /> We provide a safe, supportive, and structured environment focused on helping members develop the independent living skills necessary to transition into a healthier lifestyle successfully. We know that the needs of adult men are unique, so we have developed our community specifically to meet those needs.</p>
                </div>
            </section>
            <section className="home__second">
                <h2>OUR PHILOSOPHY</h2>
                <hr id="second-break" />
                <p>At Elevate, our philosophy is built on four essential principles for successful long-term recovery: Structure, Accountability, Support, and Action.</p>
                <Link className="home__links" id="philosophy-link" to="/about/elevate-recovery-homes">OUR PHILOSOPHY</Link>
            </section>
            <section className="home__third">
                <img src={Mountains} id="mountains" alt="Rocky Mountains with peaks higher than clouds" />
                <div className="home__third--head">
                    <h2>WHY CHOOSE US</h2>
                    <hr />
                    <p><b>“IF YOU DON’T KNOW WHERE YOU’RE GOING, ANY ROAD WILL TAKE YOU THERE”</b></p>
                    <Link className="home__links" id="why-link"to="/program/why-us">WHY US</Link>
                </div>
            </section>
            <section className="home__fourth">
                <div className="home__fourth--head">
                    <h2>LOCATION</h2>
                    <p>Elevate is located just minutes from Denver’s beautiful Front Range in Englewood—an ideal neighborhood for men looking for a fresh start.</p>
                    <Link className="home__links" id="location-link" to="/location">LOCATION</Link>
                </div>
                <img src={Hiking} id="hiking" alt="Guy hiking in mountains" />
            </section>
            <section className="home__fifth">
                <img src={LookingComputer} id="looking-computer" alt="two guys looking at computer" />
                <div className="home__fifth--head" >
                    <h2>THE TEAM</h2>
                    <p>We believe in individualized support through meaningful relationships. With mentorship, peer-to-peer connections, and available clinical support, we help members set goals and achieve them.</p>
                    <Link className="home__links" id="team-link" to="/about/our-team">OUR TEAM</Link>
                </div>
            </section>
            <section className="home__sixth">
                <div className="home__sixth--main" >
                    <h2>FROM ADDICTION TO SELF-RELIANCE</h2>
                    <hr />
                    <p>Elevate Recovery Homes is a transitional community for adult men ready to create a sober life. The community is based on the model used by Founder Bryce Givens during his journey from addiction to recovery. The foundation of the community focuses on mentorship, community as a method, peer-to-peer accountability, and commitment towards achieving one’s goals.</p>

                    <p><br /><b>“It is much easier to change how you think by changing your behavior than it is to change your behavior by changing how you think. Act out the change you seek.”</b></p>
                    <Link className="home__links" id="letter-link" to="/about/our-team">A LETTER FROM BRYCE</Link>

                </div>
            </section>
            <section className="home__seventh">
                <div className="home__seventh--head">
                    <h2>THE HOUSE</h2>
                    <Link className="home__links" id="house-link" to="/admissions/tufts-home">MORE ABOUT TUFTS HOME</Link>
                </div>
                <EmbedVideo videoId={''} />
            </section>
            <section className="home__eighth">
                <h2>GET IN TOUCH</h2>
                <FaArrowRight id="contact-arrow" />
                <Link className="home__links" to="/contact">CONTACT US</Link>
            </section>
        </div>
    )
}

export default Home
