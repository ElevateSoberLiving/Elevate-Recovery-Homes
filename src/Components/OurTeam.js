import React from 'react'
import ProfessStock from '../Assets/Images/Stock-Professional.jpg'
import Signature from '../Assets/Images/Bryce-Givens-Sig.jpeg'

function OurTeam() {
    return (
        <section className="about-us__our-team">
            <div className="about-us__our-team--top"></div>
            <div className="about-us__our-team__team">
                <div className="about-us__our-team__team--desc">
                    <h2>OUR TEAM</h2>
                    <hr />
                    <p>Elevate Recovery’s team of professionals understands that drug and alcohol addiction is a multi-faceted, personal disease that requires individualized care to be effectively treated. Our staff members guide members through an innovative approach to overcoming drug and alcohol addiction using multiple modalities geared at promoting growth and sustainable change in every area of the lives of our members.</p>
                </div>
                <div className="about-us__our-team__team--staff">
                    <h2>WHO WE ARE</h2>
                    <hr />
                    <p>
                        <span>Bryce Givens - FOUNDER</span>
                        <br />Bryce’s approach to treatment and recovery is simple.  Offer men the guidance, insight, and compassion they need, and watch them grow.  His personal journey through addiction and into a life of fullness in sobriety acts as a beacon of light to men from all walks of life.  As program administrator and head of operations oversight, Bryce ensures that all of our members are getting the treatment and tools to overcome addiction and excel in every area of life.
                        <br />
                        <br />
                        {/* <span>Robert Mitchell - Program Development</span>
                        <br />Robert is a key member of the Elevate Recovery family and has been essential in the development of program operations. After becoming sober in 2015, Robby dedicated his life to leading men to spiritual freedom and a lifestyle of recovery. His commitment to leadership and guidance is apparent in every facet of his life. As a contributor to multiple personal growth-focused organizations, Robby has made a direct impact in the recovery community, paving the way for men looking not only to combat the disease of addiction but live a life of purpose and excellence. */}
                    </p>
                </div>
            </div>

            <div className="about-us__our-team__letter">
                <div className="about-us__our-team__letter--container">
                    <h4>Letter from Bryce Givens <br /> </h4>
                    <h5>Founder of Elevate Recovery Homes</h5>
                    <br />
                    <p id="letter-dear" >Dear Future Elevate Recovery Member,</p>

                    <p id="letter-p">I want to personally convey that I completely understand where you’re at because I’ve been there myself. I’ve suffered plenty due to chronic relapses, both from substances and deplorable behaviors that led me to dark and miserable places. Whether you are currently in primary treatment, intensive outpatient, not in treatment or just wanting to regain control of your life, I’ve been there. I know all the feelings that are associated with jumping into a program: fear, anxiety, excitement, frustration, etc. Even though this feels unique to you, the fact is you are right where you are supposed to be. I took the same challenge and luckily, I have long-term recovery today with an incredibly full life. After several years of half-assing my recovery and toeing the line with my life, at the age of 28, I was done. Done with suffering, done with self-hatred. I was ready to experience all the things people and professionals told me I’d achieve once I went down the path of recovery that I resisted for so long. It takes time, trust, perseverance, and an unwavering commitment. All we are asking for at Elevate is a willingness to take action. None of this work happens overnight. Give yourself the time and just know that it gets easier and easier the longer you utilize what we practice and teach. Recovery is not always easy and there will likely be bumps in the road. Our motivation is to significantly help increase your chances of long-term recovery through Structure, Accountability, Support, and Action.
                        <br />
                        <br />
                    </p>
                    
                    <p id="letter-p">Over the years I have witnessed many miracles of recovery including my own. I have seen how my actions, the community of my fellowship, and the Elevate philosophy can help recreate a happy, joyous, and free life. Our program strives to provide an environment for success. We only admit members that are dedicated to our philosophy and the goal of long-lasting sobriety. In order to fully understand, you will have to jump in with both feet and trust the process. I know it’s easier said than done, but trust that this program will elevate your life. You get out what you put in.  “Recovery is not for people who need it, it’s for people who want it!”
                        <br />
                        <br />
                    </p>
                    <h4 id="signature">Best, Bryce Givens</h4>
                    <div id="signature-container">
                        <img id="signature-img" src={Signature} alt="Bryce Givens Signature" />
                    </div>
                </div>
                <img src={ProfessStock} alt="Welcoming owner at coffee bar" id="letter-img" />
            </div>
        </section>
    )
}

export default OurTeam
