import React from 'react'
import { Switch, Route } from 'react-router'
import Facilities from '../Components/Facilities'
import TuftsHome from '../Components/TuftsHome'
import AdmissionInfo from '../Components/AdmissionInfo'

function Admissions() {
    return (
        <div className="admissions">
            <Switch>
                <Route path="/admissions/facilities">
                    <Facilities />
                </Route >
                <Route path="/admissions/tufts-home">
                    <TuftsHome />
                </Route>
                <Route path="/admissions/admission-info">
                    <AdmissionInfo />
                </Route>
            </Switch>
        </div>
    )
}

export default Admissions
