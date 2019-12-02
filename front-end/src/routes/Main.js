import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import TOSNavBar from "../components/NavBar/TOSNavBar";
import '../App.css';
import {MainSquareMap} from "../components/MainPageSquare/MainSquareMap";
import GridList from "@material-ui/core/GridList";
import MainMap from "../components/MainMap.js";
import {firebase} from '../base';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ImgMediaCard from "../components/MainCard";
import ListSubheader from '@material-ui/core/ListSubheader';
import GridListTile from '@material-ui/core/GridListTile';
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
            console.log(user)
            if (user) {
                // User logged in already or has just logged in.
                this.setState({userName:user.email.substring(0, user.email.indexOf('@'))});
                this.setState({userId: user.uid});
                this.setState({userEmail: user.email});
                this.getResourcesByUidAxios(this.state.userId);
            } else {
                // User not logged in or has just logged out.
                this.setState({userName: "Please Log in to display user name"});
                this.setState({userId: null});
                this.setState({userEmail: null});
                this.getResourcesAxios();
            }
            // if(this.state.userId == null) {
            //     this.getResourcesAxios();
            // }
            // else {
            //     this.getResourcesByUidAxios(this.state.userId);
            // }
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
        //(force test) await axios.get(`http://localhost:8080/getResourcesByUid/CwDv5zmB2CZlM3mZrk3EXlWq5eR2`).then(res => {
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
    }


    //TODO: modify it to delete
    onClick(props)
    {
        // axios.get(`http://localhost:5000/getResourceIdsByUid/${this.state.userId}`).then((res) => {
        //     console.log(res.data)
        //     let resourceIds = res.data;  
        //     resourceIds = resourceIds[0] 
        //     resourceIds.push(props[0])
            const tiles = this.state.tiles.filter(tile => tile.id !== props[0]);
            alert("delete current resource from main: "+ props[1]); //TODO pass tile title from child
            //resourceIds = Array.from(new Set(resourceIds))
            console.log("from main page onClick!!!");
            this.setState({tiles:tiles});
            let resourceIds = [];
            tiles.map((tile)=>{
                resourceIds.push(tile.id)
            })
            console.log(resourceIds);
            axios.post("http://localhost:5000/setUser", {
                  email: this.state.userEmail,
                  name: this.state.userName,
                  resourceId: resourceIds,
                  uid: this.state.userId}).then(res => {
                      console.log(res)
                  })
        //});
    }



    render() {
        function scrollWin() {
            window.scrollTo(0,document.body.scrollHeight);
        }

        let tiles = this.state.tiles;
        const classes = makeStyles((theme: Theme) =>
            createStyles({
                root: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    overflow: 'hidden',
                    backgroundColor: theme.palette.background.paper,
                    alignItems: 'center',
                },
                gridList: {
                    width: 500,
                    height: 450,
                    transform: 'translateZ(0)',
                },
                icon: {
                    lor: 'rgba(255, 255, 255, 0.54)',
                },
            }),
        );

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
                    
                        <div className={classes.root}>
                            <div className="main_content">
                            <GridList style={{ width:"1175px" }} cellHeight={180} className={classes.gridList}>
                                <GridListTile key="Subheader" cols={3} style={{ height: 'auto', }}>
                                    <ListSubheader component="div">Events</ListSubheader>
                                </GridListTile>
                                {tiles.map((tile,i) => {
                                        return <ImgMediaCard key={i} tile={tile} onClick={this.onClick.bind(this)}/>
                                })}
                            </GridList>
                            </div>
                        </div>
                
                </section>
            </div>
        )
    }
}
export default Main;
