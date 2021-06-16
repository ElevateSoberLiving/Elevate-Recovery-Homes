import React from 'react'
import GroupSunset from '../Assets/Images/Group-at-Sunset-min.jpg'

function ElevateRecoveryHomes() {
    return (
        <section className="about-us__elevate-recovery-homes">
            <div className="about-us__elevate-recovery-homes--our-mission">
                <div>
                    <h2>- OUR MISSION -</h2>
                    <h3>SUPPORT MEMBERS IN CREATING A LIFE OF PURPOSE AND VALUE</h3>
                        <br />
                    <p>
                            At Elevate Recovery Homes, our mission is to support members in creating a life of purpose and value. Early sobriety is much more than abstaining from drugs and alcohol. It is an opportunity to explore and engage in a completely new way of living. Our approach is simple, yet progressive. Equip members with the tools and principles to maintain sobriety and enable an overall lifestyle of growth and success, we do this by addressing the whole person, not just the substance use. 
                        <br />
                        <br />
                    </p>
                    <p>
                        We want our members to see how much greater and fuller their lives can be. An increased focus on physical, emotional, social, intellectual, and spiritual health allows our members to envision a full life that is self-directed, satisfying, and joyous. Every member that comes through our doors will complete an Elevation Plan which is designed for our members to work on themselves, focus on their process and goals, and have fun doing it! By rising to the challenges presented, they start to see and realize their full potential. By experiencing compassionate care, increased responsibility, and hope, they develop the foundation necessary for independent healthy living. We know it’s possible, and we invite you to join us!
                        <br />
                        <br />
                    </p>
                    <p>
                        At Elevate, we allow for more personal attention, individualized programming, and increased accountability. We want our home to feel like your home – not a program, institution, or facility. With a handful of roommates, you have space and support to learn and grow. We want you and your roommates to support, celebrate and hold each other accountable so that you develop meaningful relationships that can last a lifetime. We schedule group activities, field trips, community meals, house meetings, and sober anniversary parties to help nurture these relationships and celebrate life’s moments together.
                    </p>
                </div>
                <img src={GroupSunset} alt="People holding arms up in desert at sundown" id="our-mission-img"/>
            </div>
            <div className="about-us__elevate-recovery-homes--philosophy">
                <div className="about-us__elevate-recovery-homes--philosophy--header">
                    <h2>OUR PHILOSPHY</h2>
                    <hr />
                    <p>At Elevate Recovery, our philosophy is built on four important principles for successful long - term recovery: Structure, Accountability, Support, and Action.
                    These pillars help guide our members through the growth stages of the program
                    </p>
                </div>
                <div className="about-us__elevate-recovery-homes--philosophy--container">
                    <div className="about-us__elevate-recovery-homes--philosophy--container--structure">
                        <h4>STRUCTURE</h4>
                        <hr/>
                        <p>
                        Beginning a journey of recovery after receiving treatment for substance use disorder isn’t always easy. There will be times when you may feel like giving up, when thoughts of drinking or using are powerful, or when you might feel like a failure. Therefore, it is essential to have a structured system and routine to keep you on the right track. Taking healthy and intentional steps to develop a sober lifestyle will ensure that you have the support you need.
                        </p>
                    </div>
                    <div className="about-us__elevate-recovery-homes--philosophy--container--accountability">
                        <h4 id="accountability">ACCOUNTABILITY</h4>
                        <hr/>
                        <p>
                            Having a community of peers who hold us accountable for our behavior proves extremely helpful in recovery. Community as a method is a practice we utilize to create accountability. Accountability can help us to stay on track and keep our focus on the things that matter most. For an individual in recovery, what is truly important is an addiction-free life. Honesty and accountability play a vital role in this process.
                        </p>
                    </div>

                    <div className="about-us__elevate-recovery-homes--philosophy--container--support">
                        <h4>SUPPORT</h4>
                        <hr/>
                        <p>
                            A support system is a network of people who provide an individual with practical, emotional, and spiritual encouragement that they can rely on to stay clean and sober. Your support system or community may be composed of people from your Recovery Group, family, close friends, or a combination thereof. It’s important to know that while you can and should do a great deal on your own, a support system can make early recovery much more manageable. After treatment, people who spend time living with other sober people are more likely to maintain their sobriety and build a robust recovery program.
                        </p>
                    </div>
                    <div className="about-us__elevate-recovery-homes--philosophy--action">
                        <h4>ACTION</h4>
                        <hr/>
                        <p>
                            Active participation is mandatory in our community. We know everybody’s journey to recovery is different. There is no one size fits approach to recovery. What works for one member may not work for another. Therefore, we take an ‘all methods’ path to sobriety, allowing our members to find what works best for their recovery. We have found that this methodology is best suited for increasing the likelihood of success. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-us__elevate-recovery-homes--benefits-container">
                <div className="about-us__elevate-recovery-homes--what-we-do">
                    <h2>WHAT WE DO</h2>
                    <p>
                        Elevate Recovery Homes provides comprehensive post-treatment care to men who suffer from substance use disorder. Our philosophy is to provide daily structure, personal accountability, community support, and a plan of action. Our Recovery Homes are staffed with a dedicated House Manager, a Certified Addiction Counselor (CACIII), and Peer Recovery Coach.
                    </p>
                </div>
                <hr/>
                <div className="about-us__elevate-recovery-homes--benefits">
                    <h2>BENEFITS</h2>
                    <ul >
                        <li>Beautiful and Spacious Recovery Homes</li>
                        <li>24/7 Live-in House Managers</li>
                        <li>Zero-Tolerance Policy</li>
                        <li>Nightly Curfew</li>
                        <li>Group Meetings at the Recovery Home</li>
                        <li>Guided Fellowship Program Assistance</li>
                        <li>Weekly Random Urinalysis and Breathalyzer Testing</li>
                        <li>Individual, Group, and Family Counseling</li>
                        <li>Sober/Recovery Coaching</li>
                        <li>Family Dinners and House Meetings </li>
                        <li>Job Placement Assistance</li>
                        <li>Life Skills Workshops</li>
                        <li>Certified Nutritionist on staff</li>
                        <li>Certified Strength and Conditioning Coach on staff</li>
                        <li>Access to Community Resources</li>
                        <li>Gym memberships available</li>
                        <li>Mentorship</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ElevateRecoveryHomes
