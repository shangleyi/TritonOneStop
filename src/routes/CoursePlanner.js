import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import TOSNavBarBar from "../components/NavBar/TOSNavBar";
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
            </div>
        )
    }
}

export default CoursePlanner;