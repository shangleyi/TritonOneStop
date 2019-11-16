import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import TOSNavBarBar from "../components/NavBar/TOSNavBar";
import OneCourse from "../components/OneCourse/OneCourse";
import QuarterSummary from "../components/OneCourse/QuarterSummary";
import Heading from "../components/OneCourse/Heading";
import '../App.css';
import WebsiteBKGND from '../resources/WebsiteBKGND.png';

class CoursePlanner extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="App">
                <TOSNavBarBar/>
                <div className="background"/>
                <Heading/>
                <OneCourse/>
                <OneCourse/>
                <OneCourse/>
                <OneCourse/>
                <OneCourse/>
                <OneCourse/>
                <QuarterSummary/>
            </div>
        )
    }
}

export default CoursePlanner;