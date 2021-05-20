import React from 'react'
import Logo from '../Assets/Logos/Elevate Logo Files/WEB/Elevate_Logo_Vertical_Color_RGB@2x.png'

function AdmissionInfo() {
    return (
        <section className="admissions__info">
            <h2 id="main-head">ADMISSION INFORMATION</h2>
            <hr />
            <h2 id="second-head">TO HELP YOU GET STARTED...</h2>
            <p>The ideal Elevate Recovery member is a man who is currently substance-free and ready to take charge of his life! We look for members who still need some structure and accountability but can also handle the freedoms and temptations of semi-independent living in a large and complex city. We are not in a remote location and everything the world has to offer is practically in our backyard or within a few hours. Combined with our intentional program design, our environment provides the right combination of challenge, support, independence, privacy, responsibility, and accountability.</p>
            <br/>
            <p>All incoming members must have some sobriety under their belt either from primary treatment, detox, or other intervention. We understand if you’ve had one relapse or many, we understand if you are still contemplating how to live abstinent, and we understand if you aren’t familiar or yet comfortable with the early stages of sobriety.  While you are with us, we can work through all of those pieces together and help you elevate through the necessary steps toward absitance.</p>
            <br/>
            <p>We do, however, require that you be substance-free upon arrival at Elevate. We also ask that you arrive open to trying new things (even if it’s a little uncomfortable) and be open to challenging yourself and your current beliefs and thinking.</p>
            <img src={Logo} id="admissions-logo" alt="Elevate Home Recovery" />
            <div className="admissions__info--expectations-head">
                <h3>HOUSE RULES AND EXPECTATIONS</h3>
                <hr/>
                <p>At Elevate Recovery Homes, unity and collective recovery are our goals. Below are the house rules and expectations that our members must abide by to facilitate a safe, clean and healthy living environment.</p>
            </div>
            <div className="admissions__info__rules-expectations-container">
                <div>
                    <h4>HOUSE RULES</h4>
                    <ul>
                        <li>No physical, verbal, emotional abuse or disrespect toward others</li>
                        <li>No drugs, alcohol, or any banned substances of any kind in the house or on the premises at any time</li>
                        <li>No insubordination towards house leadership</li>
                        <li>No weapons</li>
                        <li>No drug/alcohol logos or references on personal apparel or accessories of any kind</li>
                        <li>Contact House Manager if going to be late for curfew</li>
                        <li>Contact House Manager if you are going to be late or unable to attend mandatory house meetings</li>
                        <li>Must submit to random and regular urinalysis drops and/or breathalyzer tests</li>
                        <li>No stealing (food, toiletries, or any belongings that are not yours)</li>
                        <li>Must be current on all house fees</li>
                        <li>No going into other members rooms, ever</li>
                        <li>No nudity on the premises</li>
                        <li>No sexual activity is allowed on the premises</li>
                        <li>No sexual activity with any members of Elevate Recovery Homes</li>
                        <li>Must attend all house functions</li>
                        <li>Do not touch the thermostat or air conditioners in the house</li>
                        <li>No vaping or smoking of any kind in the house</li>
                        <li>No gambling of any kind in or out of Elevate Recovery Homes</li>
                    </ul>

                </div>
                <div>
                    <h4>HOUSE EXPECTATIONS</h4>
                    <ul>
                        <li>Keep recovery as your priority</li>
                        <li>Have a sponsor/recovery advocate you are actively working with or working toward obtaining within the first 30 days</li>
                        <li>Make recovery (12 step, RR, Meditation, etc.) meetings reg</li>
                        <li>Exhibit a lifestyle of cleanliness and respect for self and others. This includes proper self-care and hygiene</li>
                        <li>Every member’s responsibility is to keep order in all the common areas of the home, turning off lights and appliances when they are not being used</li>
                        <li>Bedrooms should be kept clean</li>
                        <li>Be up and out of bed by 9:15 am on weekdays and 10:15 on weekends</li>
                        <li>Beds should be made neatly in the morning and when you are not in them</li>
                        <li>Dressers should not be cluttered and need to stay orderly</li>
                        <li>Floors should be swept or vacuumed without any debris, clothes, or other materials</li>
                        <li>Clean up the sink and shower after you use them</li>
                        <li>Make sure there is no water on the floor after you shower/bathe</li>
                        <li>Treat this house as if it were your own home</li>
                        <li>If you fill up a garbage/recycling can or see that it needs to be emptied, please make sure that you empty it, take it to the garbage, and replace it with a liner</li>
                        <li>No one wants to nor should be expected to clean up after you. You are responsible for your own mess</li>
                        <li>If you are struggling or need to talk then ask someone in the house, talk to your sponsor, and/or go to a meeting</li>
                        <li>Help other members of the house because we can only keep what we have by giving it away</li>
                    </ul>

                </div>

            </div>
        </section>
    )
}

export default AdmissionInfo
