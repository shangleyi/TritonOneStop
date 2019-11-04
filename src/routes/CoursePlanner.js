import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import TOSNavBarBar from "../components/NavBar/TOSNavBar";
import OneCourse from "../components/OneCourse/OneCourse";
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
                <OneCourse/>
                <OneCourse/>
                <OneCourse/>
                <OneCourse/>
                <OneCourse/>
                <OneCourse/>
            </div>
        )
    }
}

export default CoursePlanner;