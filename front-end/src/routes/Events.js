import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import TOSNavBar from "../components/NavBar/TOSNavBar";
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
import ImgMediaCard from "../components/EventCard";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class Events extends Component{
    constructor(props){
        super(props);
        this.state = {
            tiles: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    async getEventsAxios() {
        const response =
            await axios.get("http://localhost:8080/getEvents")
        console.log(response.data)
        let tiles = [];
        let currentComponent = this;
        response.data.forEach(function (doc) {
            tiles.push({
                title: doc.Title,
                content: doc.content,
                imgURL: doc.ImgUrl,
                location: doc.Location,
                date: doc.Month + " " + doc.Date,
                time: doc.Time,
                linkurl: doc.LinkUrl,
                startTime: doc.StartTime,
                endTime: doc.EndTime,
                calDate: doc.CalDate
            });
        });
        console.log(tiles)

        currentComponent.setState({ tiles: tiles });
    }
    componentDidMount(){
        this.getEventsAxios()
    }

    render() {
        let displayTiles = this.state.tiles;
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

        
        
        //overide
        return (
            <div>
                <TOSNavBar />
                <div className="background" />
                <div className={classes.root}>
                    <div className="events_content">
                        <GridList style={{ width:"1175px" }} cellHeight={180} className={classes.gridList}>
                            <GridListTile key="Subheader" cols={3} style={{ height: 'auto', }}>
                                <ListSubheader component="div">Events</ListSubheader>
                            </GridListTile>
                            {displayTiles.map((tile, i) => {
                                return <ImgMediaCard key={i} tile={tile} />
                            })}
                        </GridList>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events;