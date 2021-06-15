import React from 'react'
import ElevateRecoveryHomes from './ElevateRecoveryHomes'
import { Link } from 'react-router-dom'

function WhyUs() {
    return (
        <section className="program__why-us">
            <div className="program__why-us--choose">
                <h2>WHY CHOOSE US<span>?</span></h2>
                <hr/>
                <h5>“If you don’t know where you are going, any road will take you there.” </h5>
                <p>
                Substance Abuse Disorder (SUD) is a crisis in America today. More than 21 million Americans are suffering from substance abuse disorder. In the U.S., There is an addiction-related death every 4 minutes. To combat this, we have developed a community to help our members create a life blueprint. We call it an Elevation Plan.
                </p>
                <br/>
                <p>
                Elevate Recovery Homes provides a safe, supportive, and progressive approach to recovery. We believe there are many paths to the ultimate goal of lasting sobriety. Built around our community’s four pillars: Structure, Accountability, Support, and Action, your Elevation Plan will lay the blueprint to help guide you in finding the perfect mix of intention and fulfillment for your life in recovery. Your Elevation Plan will be individualized, created alongside experts to map out your journey.
                </p>
                <button id="why-us--elevation-plan" ><Link className="links" id="elevation-plan" to="/program/elevation-plan">ELEVATION PLAN</Link></button>

            </div>
            <ElevateRecoveryHomes />
            <div className="program__why-us--pillars">
                <div className="program__why-us--pillars--cards">
                    <h4>STRUCTURE</h4>
                    <hr/>
                    <p>
                        Beginning a journey of recovery after receiving treatment for substance use disorder isn’t always easy. There will be times when you may feel like giving up, when thoughts of drinking or using are powerful, or when you might feel like a failure. Therefore, it is vital to have a structured system and routine to keep you on the right track. Taking healthy and intentional steps to develop a sober lifestyle will ensure that you have the support you need.
                    </p>
                </div>
                <div className="program__why-us--pillars--cards" >
                    <h4>ACCOUNTABILITY</h4>
                    <hr/>
                    <p>
                        Having a community of peers who hold us accountable for our behavior proves extremely helpful in recovery. Community as a method is a practice we utilize to create accountability. This can help us to stay on track and keep our focus on the things that matter most. For an individual in recovery, what is truly important is an addiction-free life. Honesty and accountability play a vital role in this process.
                    </p>
                </div>
                <div className="program__why-us--pillars--cards" >
                    <h4>SUPPORT</h4>
                    <hr/>
                    <p>
                        A support system is a network of people who provide individuals with practical, emotional, and spiritual support that they can rely on to stay clean and sober. Your support system or community may be composed of people from your Recovery Group, family, close friends, or a combination thereof. It’s important to know that while you can and should do a great deal on your own, a support system can make early recovery much more manageable. After treatment, people who spend time living with other sober people are more likely to maintain their sobriety and build a robust recovery program.
                    </p>
                </div>
                <div className="program__why-us--pillars--cards" >
                    <h4>ACTION</h4>
                    <hr/>
                    <p>
                        Active participation is mandatory in our community. We know everybody’s journey is different. There is no “one size fits all” approach to recovery. What works for one member may not work for another. Therefore, we take an ‘all methods’ approach to sobriety, allowing our members to find what works best for their recovery. We have found that this methodology is best suited for increasing the likelihood of success.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
