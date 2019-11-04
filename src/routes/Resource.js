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
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';


class Resource extends Component{
    constructor(props){
        super(props)
    }

    // renderItemByTypes(header="Untitled", content="None", index) {
    //     {tileData.map(() => (
    //         <ResourceCard key={this.tile} tile={this.tile}/>
    //     ))}

    //     if(index < 3) {
    //       return <ResourceCard key={this.tile} tile={this.tile}/>
    //     }
    //     else if(index <5){
    //       return <ResourceCard key={this.tile} tile={this.tile}/>
    //     }
    //     else if(index <7){
    //       return <ResourceCard key={this.tile} tile={this.tile}/>
    //     }
    //     else if(index <10){
    //         return <ResourceCard key={this.tile} tile={this.tile}/>
    //     }
    //     else if(index <14){
    //         return <ResourceCard key={this.tile} tile={this.tile}/>
    //     }
    //     else
    //     {
    //         return <ResourceCard key={this.tile} tile={this.tile}/>
    //     }
    //   };

    render() {
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
                <NavBar/>
            <div className={classes.root}>  

            <Autocomplete
        freeSolo
        autoHightlight
        options={tileData.map(tile => tile.title)}
        renderInput={params => (
          <TextField {...params} hint="search" margin="normal" variant="outlined" fullWidth />
        )}/>
                
            <GridList style={{marginLeft: 50,marginRight: 'auto'}}cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={3} style={{ height: 'auto', }}>
                        <ListSubheader component="div">Resources</ListSubheader>
                    </GridListTile>
                    {tileData.map(tile => (
                        <ResourceCard key={tile} tile={tile}/>
                    ))}
                    {/* {tileData.map((tile, index) => this.renderItemByTypes(tile.title, tile.content, index))} */}
                </GridList>
                </div>
            </div>
        )
    }
}

export default Resource;