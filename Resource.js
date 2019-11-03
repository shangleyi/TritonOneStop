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
import Popup from "reactjs-popup";

//expansion panel
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
                    overflow: 'visible',
                    backgroundColor: theme.palette.background.paper,
                    alignContent: 'space-between',
                },
                subroot:{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    overflow: 'hidden',
                    backgroundColor: theme.palette.background.paper,
                    paddingTop: 700,
                    zIndex: 1000,
                    position: 'sticky',
                },
                gridList: {
                    width: 500,
                    height: 450,
                    paddingTop: 70,
                    zIndex: 1000,
                },
                icon: {
                    lor: 'rgba(255, 255, 255, 0.54)',
                },
            }),
        );
        return (
            <div className={classes.root}>
                <NavBar/>
                <div className={classes.subroot}>
                <GridList cellHeight={200} spacing={20} cols={3} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Resources</ListSubheader>
                    </GridListTile>
                    {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            actionIcon={
                            <IconButton onClick={tile} aria-label={`info about ${tile.title}`} className={classes.icon}>
                                   <InfoIcon />
                            </IconButton>
                            }
                            
                        >
                            {/* <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                    <Typography>Expansion panel</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>Hello hopefully it works......Hello again. Lorem ipsum dolor sit amet, consetjawegl lagwei ,ewagj igjlwiagjlwejglwieg lglzew jzleg zlges</Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel> */}
                        </GridListTileBar>
                        
                    </GridListTile>
                    ))}
                </GridList>
                </div>
            </div>
        )
    }
}

export default Resource;