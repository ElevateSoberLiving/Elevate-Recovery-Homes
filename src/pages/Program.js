import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import WhyUs from '../Components/WhyUs'
import WhatToExpect from '../Components/WhatToExpect'
import ElevationPlan from '../Components/ElevationPlan'
import EmploymentTraining from '../Components/EmploymentTraining'

function Program() {
    return (
        <div className="program">
            <Switch>
                <Route path="/program/why-us">
                    <WhyUs />
                </Route>
                <Route path="/program/what-to-expect">
                    <WhatToExpect />
                </Route>
                <Route path="/program/elevation-plan">
                    <ElevationPlan />
                </Route>
                <Route path="/program/vocational-training">
                    <EmploymentTraining />
                </Route>
            </Switch>
        </div>
    )
}

export default Program
