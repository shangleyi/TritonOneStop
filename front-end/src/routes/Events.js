import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import TOSNavBarBar from "../components/NavBar/TOSNavBar";
import OneEvent from "../components/OneEvent/OneEvent";
import '../App.css';
import WebsiteBKGND from '../resources/WebsiteBKGND.png';

class Events extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="App">
                <TOSNavBarBar/>
                <div className="App-eventLayout">
                    <div className="App-events">
                        <OneEvent/>
                        <OneEvent/>
                        <OneEvent/>
                        <OneEvent/>
                    </div>
                    <div className="App-events">
                        <OneEvent/>
                        <OneEvent/>
                        <OneEvent/>
                        <OneEvent/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events;