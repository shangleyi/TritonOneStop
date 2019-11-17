import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import TOSNavBarBar from "../components/NavBar/TOSNavBar";
import OneEvent from "../components/OneEvent/OneEvent";
import '../App.css';
import WebsiteBKGND from '../resources/WebsiteBKGND.png';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {tileData} from '../components/OneEvent/tileData';
import ImgMediaCard from "../components/ResourceCard";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class Events extends Component{
    constructor(props){
        super(props);
        this.state = {
            tiles: [],
            searchTiles: [],
            CategoryTiles: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    render() {
        return (
            <div className="App">
                <TOSNavBarBar/>
                <div className="background"/>
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