import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import TOSNavBar from "../components/NavBar/TOSNavBar";
import '../App.css';
import {MainSquareMap} from "../components/MainPageSquare/MainSquareMap";
import GridList from "@material-ui/core/GridList";
import MainMap from "../components/MainMap.js";
import {firebase} from '../base';
import ImgMediaCard from "../components/ResourceCard";
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "Please Log In to display User Name",
            userId: null,
            userEmail: null,
            tiles: [],
        };

        
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User logged in already or has just logged in.
                this.setState({userName:user.email.substring(0, user.email.indexOf('@'))});
                this.setState({userId: user.uid});
                this.setState({userEmail: user.email});
            } else {
                // User not logged in or has just logged out.
                this.setState({userName: "Please Log in to display user name"});
                this.setState({userId: null});
                this.setState({userEmail: null});
            }
            if(this.state.userId == null) {
                this.getResourcesAxios();
            }
            else {
                this.getResourcesByUidAxios(this.state.userId);
            }
        });
        
    }

    async getResourcesAxios(){
        const response =
          await axios.get("http://localhost:5000/getResources")
        let tiles = [];
        let currentComponent = this;
        response.data.forEach(function(doc) {
            tiles.push({
                id: doc.id,
                title: doc.title,
                content: doc.content,
                imgURL: doc.imgURL,
                Category: doc.Category,
                URL: doc.URL,
                userId: currentComponent.state.userId
            });
        });    
        tiles = tiles.slice(12)
        currentComponent.setState({tiles: tiles});
    }

    async getResourcesByUidAxios(userId){
        // let currentComponent = this;
        const response =
          await axios.get(`http://localhost:5000/getResourcesByUid/${userId}`).then(res => {
              console.log(res)
            let tiles = [];
            let currentComponent = this;
            res.data.forEach(function(doc) {
                tiles.push({
                    id: doc.id,
                    title: doc.title,
                    content: doc.content,
                    imgURL: doc.imgURL,
                    Category: doc.Category,
                    URL: doc.URL,
                    userId: currentComponent.state.userId
                });
            });    
            currentComponent.setState({tiles: tiles});
          })
       

        // response.data.forEach(function(doc) {
        //     mainTilesId.push({
        //        mainTilesId: doc.resourceId,
        //     });
        // });   
    }


    render() {
        function scrollWin() {
            window.scrollTo(0,document.body.scrollHeight);
        }

        let tiles = this.state.tiles;

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
                            {/* {MainSquareMap.map(tile => (
                                <MainMap key={tile} tile={tile}/>
                            ))} */}
                            {tiles.map((tile,i) => {
                                        return <ImgMediaCard key={i} tile={tile}/>
                            })}
                        </GridList>
                    </div>
                </section>
            </div>
        )
    }
}
export default Main;
