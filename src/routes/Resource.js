import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import NavBar from "../components/NavBar/TOSNavBar"
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {tileData} from '../components/OneEvent/tileData';
import ResourceCard from "../components/ResourceCard";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//       width: 500,
//       height: 450,
//     },
//     icon: {
//       color: 'rgba(255, 255, 255, 0.54)',
//     },
//   }),
// );
// function setStyle() {
//     const classes =  useStyles();
// }
class Resource extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const classes = makeStyles((theme: Theme) =>
            createStyles({
                root: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    overflow: 'hidden',
                    backgroundColor: theme.palette.background.paper,
                },
                gridList: {
                    width: 500,
                    height: 450,
                },
                icon: {
                    lor: 'rgba(255, 255, 255, 0.54)',
                },
            }),
        );
        return (
            <div>
                <NavBar/>
            <div className={classes.root}>  
                
                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Resources</ListSubheader>
                    </GridListTile>
                    {tileData.map(tile => (
                    // <GridListTile key={tile.img}>
                    //     <img src={tile.img} alt={tile.title} />
                    //     <GridListTileBar
                    //         title={tile.title}
                    //         actionIcon={
                    //             <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    //             <InfoIcon />
                    //             </IconButton>
                    //         }
                    //     />
                    // </GridListTile>
                        <ResourceCard key={tile} tile={tile}/>
                    ))}
                </GridList>
                </div>
            </div>
        )
    }
}

export default Resource;