import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import NarBar from "../components/NavBar/TOSNavBar"
import '../App.css';
import logo from '../logo.svg';

class Main extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="App">
                <NarBar/>
                   <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    </header>
            </div>
        )
    }
}

export default Main;