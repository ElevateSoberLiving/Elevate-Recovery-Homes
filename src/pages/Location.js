import React from 'react'
import Denver from '../Assets/Images/Denver.jpg'
import Mountains from '../Assets/Images/Mountains.jpg'

function Location() {
    return (
        <div className="location">
            <h1>Location</h1>
            <section className="location__metro">
                <img src={Denver} alt="Downtown Denver" />
                <div>
                    <h2>The Denver Metro Area</h2>
                    <p>— The Mile High City — is where urban sophistication meets outdoor adventure. Denver is an outdoor city known for its world-class cultural attractions all within easy reach of the Rocky Mountains. In 2019, Denver was named in the top two best destinations to live in the United States, by US News & World Report. A few of those reasons included: livability scores, job growth, quality of living, health and fitness, and much more. Denver boasts 300 days of sunshine each year. Even during cold winter months, it’s not uncommon to experience the warm sunshine. The city has 200 parks and nearly 20,000 acres of parks in the nearby Rocky Mountains. Add to this, the ongoing lifestyle perks of outdoor recreation, arts and culture, music, eateries, and you begin to get the picture

                </p>
                    <p>Denver is especially great for young adults. There are four major universities and multiple community colleges, along with an abundance of trade schools. In addition to a vibrant business community, an international airport, there is a thriving tourist industry with major attractions including 5 professional sport’s teams! Denver is a truly unique city

                </p>
                </div>
            </section>
            <section className="location__importantance">
                <div>
                    <h2>Location is important</h2>
                    <p>There is a reason Elevate Recovery Homes selected the Denver Metro area as our home. It is located in Englewood —an ideal Denver neighborhood for young men in transition. This area has an abundance of job opportunities, as well as 12-step meetings and support groups within biking distance. Our house is just one block away from Centennial Park, which features extensive jogging and biking trails and minutes away from gyms, shopping centers, entertainment, and restaurants. There are also excellent apartment complexes and shared roommate situations in close proximity for when Elevate members transition into independent living.  We invite you to explore all of the many things our home, our community, and Denver have to offer.</p>
                </div>
                <img src={Mountains} alt="Downtown Denver" />
            </section>
        </div>
    )
}

export default Location