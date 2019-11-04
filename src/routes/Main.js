import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import TOSNavBar from "../components/NavBar/TOSNavBar";
import '../App.css';
import logo from '../logo.svg';
import {MainSquareMap} from "../components/MainPageSquare/MainSquareMap";
import WebsiteBKGND from '../resources/WebsiteBKGND.png';
import MainMap from "../components/MainMap.js";
class Main extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="App">
                <TOSNavBar/>
                {MainSquareMap.map(tile => (
                    <MainMap key={tile} tile={tile}/>
                ))}
            </div>
        )
    }
}

export default Main;