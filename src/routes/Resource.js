import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import NavBar from "../components/NavBar/TOSNavBar"
import shuttle from "../resources/shuttles-header.jpg"
import parking from "../resources/parking.jpg"
import foodpantry from "../resources/triton-food-pantry.jpg"
import dining from "../resources/ucsd-dining.jpg"
import healthCenter from "../resources/shs-logo-text.jpg"
import rimac from "../resources/rimac.jpg"
import mainGym from "../resources/5230508_orig.jpg"
import careerCenter from "../resources/career-center.jpg"
import financialAid from "../resources/financial-aid.png"
import iclicker from "../resources/iclicker.jpg"
import canvas from "../resources/canvas.png"
import gradescope from "../resources/gradescope-icon.jpg"
import piazza from "../resources/Piazza-Icon.png"
import orgs from "../resources/student-organization-fair.jpg"
import research from "../resources/ucsd-research.jpg"
import studyAbroad from "../resources/study-abroad.png"
import Container from '@material-ui/core/Container';


class Resource extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Resources</h1>
                <meta charset="utf-8" />
                <h3>Food</h3>
                <div className='rows'>
                    <div className='row'><img className="ucsd-food-pantry" alt="foodpantry" src={foodpantry} width="300px" height="200"/></div>
                    <div className='row'><img className="ucsd-dining" alt="dining" src={dining} width="300px" height="200"/></div>
                </div>
                <h3>Transportation</h3>
                <div className='rows'>
                    <div className='row'><img className="ucsdShuttle" alt="shuttle" src={shuttle} width="300px" height="200"/></div>
                    <div className='row'><img className="ucsdParking" alt="parking" src={parking} width="300px" height="200"/></div>
                </div>
                <h3>Health</h3>
                <div className='rows'>
                    <div className='row'><img className="ucsd-health-center" alt="healthCenter" src={healthCenter} width="300px" height="200"/></div>
                    <div className='row'><img className="ucsd-rimac" alt="rimac" src={rimac} width="300px" height="200"/></div>
                    <div className='row'><img className="ucsd-main-gym" alt="mainGym" src={mainGym} width="300px" height="200"/></div>
                </div>
                <h3>Career</h3>
                <div className='rows'>
                    <div className='row'><img className="ucsd-career-center" alt="careerCenter" src={careerCenter} width="300px" height="200"/></div>
                </div>
                <h3>Financial</h3>
                <div className='rows'>
                    <div className='row'><img className="ucsd-financial-aid" alt="financialAid" src={financialAid} width="300px" height="200"/></div>
                </div>
                <h3>Classroom</h3>
                <div className='rows'>
                    <div className='row'><img className="iclicker" alt="iclicker" src={iclicker} width="300px" height="200"/></div>
                    <div className='row'><img className="canvas" alt="canvas" src={canvas} width="300px" height="200"/></div>
                    <div className='row'><img className="piazza" alt="piazza" src={piazza} width="300px" height="200"/></div>
                    <div className='row'><img className="gradescope" alt="gradescope" src={gradescope} width="300px" height="200"/></div>
                </div>
                <h3>Student Organizations</h3>
                <div className='rows'>
                    <div className='row'><img className="ucsd-orgs" alt="orgs" src={orgs} width="300px" height="200"/></div>
                </div>
                <h3>Research</h3>
                <div className='rows'>
                    <div className='row'><img className="research" alt="research" src={research} width="300px" height="200"/></div>
                </div>
                <h3>Other</h3>
                <div className='rows'>
                    <div className='row'><img className="studyAbroad" alt="studyAbroad" src={studyAbroad} width="300px" height="200"/></div>
                </div>
            </div>
        )
    }
}

export default Resource;