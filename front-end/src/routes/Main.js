import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import TOSNavBar from "../components/NavBar/TOSNavBar";
import '../App.css';
import {MainSquareMap} from "../components/MainPageSquare/MainSquareMap";
import GridList from "@material-ui/core/GridList";
import MainMap from "../components/MainMap.js";
import {db, firebase} from '../base'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "Please Log In to display User Name"
        };

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User logged in already or has just logged in.
                this.setState({userName:user.email.substring(0, user.email.indexOf('@'))});
            } else {
                // User not logged in or has just logged out.
                this.setState({userName: "Please Log in to display user name"});
            }});
    }

    render() {
        function scrollWin() {
                window.scrollTo(0,document.body.scrollHeight);
        }

        return (
            <div className="mainPage-background">
                <TOSNavBar/>
                <section id="section06" class="demo">
                    <h1 className="welcomeStyle">
                        Welcome to
                    </h1>
                    <h2 className="mainPageH2">
                        Triton OneStop
                    </h2>
                    <h3 className="mainPageH3">
                        {this.state.userName}
                    </h3>
                    <h4 className="mainPageH4">
                        This is your OneStop Guide to University of California of San Diego
                    </h4>

                    <a href="#section02"> <span>
                    </span>Scroll</a>
                </section>

                <section id="section02">
                    <div className="App-mainPageLayout">
                        <GridList style={{marginLeft: 60, marginRight: 'auto'}} cellHeight={180}>
                        {/*<GridList style={{alignContent: "center"}} cellHeight={180}>*/}
                            {MainSquareMap.map(tile => (
                                <MainMap key={tile} tile={tile}/>
                            ))}
                        </GridList>
                    </div>
                </section>
            </div>
        )
    }
}
export default Main;
