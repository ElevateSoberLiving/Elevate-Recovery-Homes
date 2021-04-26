import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ElevateRecoveryHomes from '../Components/ElevateRecoveryHomes'
import OurTeam from '../Components/OurTeam'

function AboutUs() {
    return (
        <div className="about-us">
            <Switch>
                <Route path={"/about/elevate-recovery-homes"}>
                    <ElevateRecoveryHomes />
                </Route>
                <Route path={"/about/our-team"}>
                    <OurTeam />
                </Route>
            </Switch>
        </div>
    )
}

export default AboutUs