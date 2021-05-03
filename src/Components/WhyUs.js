import React from 'react'
import { Link } from 'react-router-dom'

function WhyUs() {
    return (
        <section className="program__why-us">
            <div className="program__why-us--choose">
                <h2>Why Choose Us?</h2>
                <hr/>
                <h5>“If you don’t know where you are going, any road will take you there.” </h5>
                <p>
                    Substance Abuse Disorder (SUD) is a crisis in America today. More than 21 million Americans are suffering from substance abuse disorder. We lose a loved one every 4 minutes to addiction-related deaths. To combat this, we have developed a program to help our members create a life blueprint. We call it an Elevation Plan.
                </p>
                <br/>
                <p>
                    Elevate Recovery Homes provides a safe, supportive, and progressive approach to recovery. We believe there are many paths to the ultimate goal of lasting sobriety. Built around the four pillars: Structure, Accountability, Support, and Action, your Elevation Plan will lay the blueprint to help guide you in finding the perfect mix of intention and fulfillment for your life in recovery. Your Elevation Plan will be individualized, created alongside experts, to map out your personal journey.
                </p>
                <button id="why-us--elevation-plan" ><Link className="links" id="elevation-plan" to="/program/elevation-plan">Elevation plan</Link></button>

            </div>
            <div className="program__why-us--pillars">
                <div className="program__why-us--pillars--cards">
                    <h4>STRUCTURE</h4>
                    <hr/>
                    <p>
                        We provide the daily Structure, personal Accountability, community Support, and a plan of Action needed to lead a healthy recovery program. If you are looking for a structured sober living environment and comprehensive after-treatment solutions, Elevate Recovery Homes is the answer
                    </p>
                </div>
                <div className="program__why-us--pillars--cards" >
                    <h4>ACCOUNTABILITY</h4>
                    <hr/>
                    <p>
                        Having people in our lives who hold us accountable for our behavior proves to be extremely helpful. This can help us to stay on track and keep our focus on the things that matter. Honesty and accountability play a vital role in recovery.
                    </p>
                </div>
                <div className="program__why-us--pillars--cards" >
                    <h4>SUPPORT</h4>
                    <hr/>
                    <p>
                        Elevate provides a support system that you can rely on to stay clean and sober. People who spend time living with other sober people after treatment are more likely to maintain their sobriety and build a strong program of recovery.
                    </p>
                </div>
                <div className="program__why-us--pillars--cards" >
                    <h4>ACTION</h4>
                    <hr/>
                    <p>
                        Structure, Accountability, and Support all culminate through consistent Action. The most imperative vehicle in recovery is participating in it. We know from experience that a mind, body, and spirit aligned with intent and perseverance, gives us the best chance for lifelong success.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
