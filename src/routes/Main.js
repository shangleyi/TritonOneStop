import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import NarBar from "../components/NavBar/TOSNavBar"
import '../App.css';
import logo from '../logo.svg';
import TOSNavBarBar from "../components/NavBar/TOSNavBar";
import Square from "../components/MainPageSquare/Square";
import WebsiteBKGND from '../resources/WebsiteBKGND.png';

class Main extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="App">
                <TOSNavBarBar/>
                <div className="App-mainLayout">
                    <div className="App-mainSquare">
                        <Square/>
                        <Square/>
                        <Square/>
                    </div>
                    <div className="App-mainSquare">
                        <Square/>
                        <Square/>
                        <Square/>
                    </div>
                    <div className="App-mainSquare">
                        <Square/>
                        <Square/>
                        <Square/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;