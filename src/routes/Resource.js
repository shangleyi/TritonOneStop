import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import NarBar from "../components/NavBar/TOSNavBar"

class Resource extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <NarBar/>
            </div>
        )
    }
}

export default Resource;