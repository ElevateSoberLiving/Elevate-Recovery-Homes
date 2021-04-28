import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import ElevateRecoveryHomes from '../Components/ElevateRecoveryHomes'
import OurTeam from '../Components/OurTeam'

function AboutUs(props) {
    const { url } = useRouteMatch()
    
    return (
        <div className="about-us">
            <h2>About Us</h2>

            <Switch>
                <Route path={`${url}/elevate-recovery-homes`} component={ElevateRecoveryHomes}>
                    <ElevateRecoveryHomes />
                </Route>
                <Route path={`${url}/our-team`}>
                    <OurTeam />
                </Route>
            </Switch>
        </div>
    )
}

export default AboutUs