import React from 'react'
import Collapsible from './Collapsible'

function ElevationPlan() {
    return (
        <section className="program__elevation-plan">
            <div className="program__elevation-plan__header">
                <div className="program__elevation-plan__header--container">
                    <h1>ELEVATION PLAN</h1>
                    <div className="mountain"></div>
                    <p>
                        Elevate Recovery Homes Elevation Plan involves preparing members for success over the long term and assisting members with developing life skills including financial planning and accountability development. Our staff also help with job skills including resume building, interviewing, workplace behavior, and career selection.
                </p>

                    <p>
                        Community as a method is a practice we utilize to create accountability. House staff and peers make sure members are attending their meetings, communicating with their sponsors and therapists, and are generally thriving within the program.
                </p>

                </div>
            </div>
            <div className="program__elevation-plan__weekly-meetings">
                <div className="program__elevation-plan__weekly-meetings--header">
                    <h2>ELEVATION PLAN WEEKLY MEETINGS</h2>
                    <p>
                        Weekly, comprehensive Elevation Plan, and Life Skills Development Meetings often include:
                    </p>
                </div>
                <div className="program__elevation-plan__weekly-meetings--therapeutic-container">
                    <h3>THERAPEUTIC SKILL DEVELOPMENT</h3>
                    <hr />
                    <div className="program__elevation-plan__weekly-meetings--therapeutic-list">
                        <Collapsible header={'REFERRAL FOR CLINICAL HELP'} >
                            <li>Trauma</li>
                            <li>Abuse</li>
                            <li>Dual diagnosis </li>
                            <li>Eating Disorders</li>
                            <li>Mental Health</li>
                            <li>Physical Wellness</li>
                        </Collapsible>
                        <Collapsible header={'BELIEF SWITCHES'} >
                            <li>We help members identify attitudes and beliefs, unhealthy emotions (unhealthy anger, depression, anxiety, guilt, shame, etc.), and maladaptive behaviors (procrastination, addictive behaviors, aggression, unhealthy eating, sleep disturbance, etc.) that correlate to substance use and give them a framework to change</li>
                        </Collapsible>
                        <Collapsible header={'COGNITIVE TOOLS'} >
                            <li>Thinking Errors (blaming, catastrophizing, mind reading,  all or nothing thinking, etc.)</li>
                            <li>Distortions (personalization, overgeneralization, jumping to conclusions, victim stance, etc.)</li>
                            <li>Triggers (people, places, and things)</li>
                        </Collapsible>
                    </div>
                </div>
                <div className="program__elevation-plan__weekly-meetings--daily-structure--container">
                    <h3>DAILY STRUCTURE</h3>
                    <hr />
                    <div className="program__elevation-plan__weekly-meetings--daily-structure">
                        <Collapsible header={'TYPE OF SUPPORT'} >
                            <li>Daily schedule reviews and time management support</li>
                            <li>Random job visits</li>
                            <li>Random sobriety checks</li>
                        </Collapsible>
                        <Collapsible header={'MENTORSHIP/ ADVOCATES'} >
                            <li>Individual coaching</li>
                        </Collapsible>
                        <Collapsible header={'MENTAL FITNESS'} >
                            <li>Workshops</li>
                            <li>Expert Panels</li>
                        </Collapsible>
                        <Collapsible header={'PHYSICAL FITNESS'} >
                            <li>Classes</li>
                            <li>Recreation</li>
                            <li>Personalized training program</li>
                        </Collapsible>
                        <Collapsible header={'SPIRITUAL FITNESS'} >
                            <li>Religious activities</li>
                            <li>Meditation Classes</li>
                            <li>Personal Coaching</li>
                        </Collapsible>
                    </div>
                </div>

                <div className="program__elevation-plan__weekly-meetings--skill-development--container">
                    <h3>SELF-ACTUALIZATION SKILL DEVELOPMENT</h3>
                    <hr />
                    <div className="program__elevation-plan__weekly-meetings--skill-development">
                        <Collapsible header={'VIVIDE VISION'} >
                            <li>Goal Setting Development</li>
                            <li>Visualization Workshops</li>
                            <li>Keynote groups (Mike Dent)</li>
                        </Collapsible>
                        <Collapsible header={'FAMLIY GOALS'} >
                            <li>Relationship building</li>
                            <li>Group Activities</li>
                            <li>Family Therapy</li>
                        </Collapsible>
                    </div>
                </div>

                <div className="program__elevation-plan__weekly-meetings--habit-development--container">
                    <h3>ACTION/HABIT SKILL DEVELOPMENT</h3>
                    <hr />
                    <div className="program__elevation-plan__weekly-meetings--habit-development">
                        <Collapsible header={'EDUCATION GOALS'} >
                            <li>Completing college or vocational training applications</li>
                        </Collapsible>
                        <Collapsible header={'EMPLOYMENT GOALS'} >
                            <li>Employment coaching including resume development and interview preparation</li>
                        </Collapsible>
                        <Collapsible header={'EMPLOYMENT NEEDS'} >
                            <li>Support/Reference Letters</li>
                            <li>Networking functions</li>
                        </Collapsible>
                        <Collapsible header={'FINANCIAL OBLIGATIONS'} >
                            <li>Personal budget development</li>
                            <li>Securing car insurance</li>
                        </Collapsible>
                        <Collapsible header={'FINANCIAL GOALS'} >
                            <li>Financial management review and oversight</li>
                            <li>Transferring of bills and payments from parents to members</li>
                            <li>Reviewing personal credit report</li>
                            <li>Resolving outstanding credit or billing issues</li>
                            <li>Financial responsibility tasks such as taxes, identification, insurance, and credit monitoring</li>
                        </Collapsible>
                        <Collapsible header={'LIFE SKILLS'} >
                            <li>Workshops (gardening, woodworking, trade skills, expert panels, etc.)</li>
                        </Collapsible>
                        <Collapsible header={'HEALTHCARE SUPPORT'} >
                            <li>Completing medical insurance paperwork</li>
                            <li>Coordination of medical, dental, therapy, and psychiatric services</li>
                        </Collapsible>
                        <Collapsible header={'TRANSITIONAL SUPPORT'} >
                            <li>Transitional living planning</li>
                            <li>Identifying and securing appropriate next-step living arrangements</li>
                        </Collapsible>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ElevationPlan
