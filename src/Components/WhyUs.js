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
                Elevate Recovery Homes provides a safe, supportive, and progressive approach to recovery. We believe there are many paths to the ultimate goal of lasting sobriety. Built around our community’s four pillars: STRUCTURE, ACCOUNTABILITY, SUPPORT, and ACTION, your Elevation Plan will lay the blueprint to help guide you in finding the perfect mix of intention and fulfillment for your life in recovery. Your Elevation Plan will be individualized, created alongside experts to map out your journey.
                </p>
                <button id="why-us--elevation-plan" ><Link className="links" id="elevation-plan" to="/program/elevation-plan">ELEVATION PLAN</Link></button>

            </div>
            <ElevateRecoveryHomes />
        </section>
    )
}

export default WhyUs
