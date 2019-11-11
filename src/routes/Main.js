import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import TOSNavBar from "../components/NavBar/TOSNavBar";
import '../App.css';
import {MainSquareMap} from "../components/MainPageSquare/MainSquareMap";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import MainMap from "../components/MainMap.js";

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">
                <TOSNavBar/>
                <div className="App-mainPageLayout">
                    <GridList style={{marginLeft: 100, marginRight: 'auto'}} cellHeight={180}>
                        {MainSquareMap.map(tile => (
                            <MainMap key={tile} tile={tile}/>
                        ))}
                    </GridList>
                </div>
            </div>
        )

    }
}
export default Main;