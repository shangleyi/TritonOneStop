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
import ImgMediaCard from "../components/ResourceCard";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import db from "../base";

class Resource extends Component{
    constructor(props){
        super(props);
        this.state = {
            tiles: [],
            searchTiles: [],
            CategoryTiles: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        // this.search = this.search.bind(this);
        // this.clearSearch = this.clearSearch.bind(this);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    componentDidMount() {
        let tiles = [];
        let currentComponent = this;
        let searchTiles = [];
        let CategoryTiles = [];
        db.collection("resources").get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc) {
                tiles.push({
                    id: doc.id,
                    title: doc.data().title,
                    content: doc.data().content,
                    imgURL: doc.data().imgURL,
                    Category: doc.data().Category
                });
                searchTiles.push({
                    id: doc.id,
                    title: doc.data().title,
                    content: doc.data().content,
                    imgURL: doc.data().imgURL,
                    Category: doc.data().Category
                });
                CategoryTiles.push(doc.data().Category)
            });
            
            CategoryTiles = Array.from(new Set(CategoryTiles));
            console.log(CategoryTiles)
            currentComponent.setState({tiles: tiles});
            currentComponent.setState({searchTiles: searchTiles});
            currentComponent.setState({CategoryTiles: CategoryTiles});
        })
        .catch(function(error) {
            console.log("Error getting docs: ", error);
        });
        
    }
    // search() {
    //     console.log(this.state.searchStr)
    //     let dataList = this.state.tiles.filter(item => {
    //         if (this.state.searchStr.trim() !== "") { 
    //           if (!item['title'] || item['title'].indexOf(this.state.searchStr) === -1) {
    //               console.log("false")
    //             return false
    //           }
    //         }
    //         return true
    //     })
    //     this.setState({tiles: dataList});
    //     console.log(this.state.tiles)
    // }

    // clearSearch() {
    //     this.setState({searchStr: ""});
    //     this.search();
    // }

    handleTextFieldChange (e) {
        console.log(this.state.tiles);
        let tiles = this.state.tiles;
        if(e.target.value === '') {
            this.setState({searchTiles: tiles});
        }
        else {
            let dataList = this.state.tiles.filter(item => {
                if (e.target.value.trim() !== "") { 
                    if (!item['title'] || item['title'].toUpperCase().indexOf(e.target.value.toUpperCase()) === -1) {
                        return false
                    }
                }
                return true
            })
            this.setState({searchTiles: dataList});
        }
    }

    handleCategoryChange(e) {
        let tiles = this.state.tiles;
        
        if(e.target.value === '') {
            this.setState({searchTiles: tiles});
        }
        else {
            let dataList = this.state.tiles.filter(item => {
                if (e.target.value.trim() !== "") { 
                    if (!item['Category'] || item['Category'].toUpperCase().indexOf(e.target.value.toUpperCase()) === -1) {
                        return false
                    }
                }
                return true
            })
            this.setState({searchTiles: dataList});
        }
    }

    render() {
        let displayTiles = this.state.searchTiles;
        let CategoryTiles = this.state.CategoryTiles;
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
                    options={CategoryTiles.map(Category => Category)}
                    renderInput={params => (
                    <TextField {...params} placeholder="search by category.." margin="normal" variant="outlined" fullWidth onChange={this.handleCategoryChange} />
                    )}/>

                    <Autocomplete
                    freeSolo
                    autoHightlight
                    options={displayTiles.map(tile => tile.title)}
                    renderInput={params => (
                    <TextField {...params} placeholder="search.." margin="normal" variant="outlined" fullWidth onChange={this.handleTextFieldChange} />
                    )}/>
                        
                    <GridList style={{marginLeft: 50,marginRight: 'auto'}}cellHeight={180} className={classes.gridList}>
                            <GridListTile key="Subheader" cols={3} style={{ height: 'auto', }}>
                                <ListSubheader component="div">Resources</ListSubheader>
                            </GridListTile>
                            {displayTiles.map((tile,i) => {
                                return <ImgMediaCard key={i} tile={tile}/>
                            })}
                    </GridList>
                </div>
            </div>
        )
    }
}

export default Resource;