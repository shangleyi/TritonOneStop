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
import axios from 'axios';
import ListItemText from '@material-ui/core/ListItemText';

class Resource extends Component{
    constructor(props){
        super(props);
        this.state = {
            tiles: [],
            searchTiles: [],
            CategoryTiles: [],
            searchCategoryStr: "",
            searchTextStr: ""
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        // this.search = this.search.bind(this);
        // this.clearSearch = this.clearSearch.bind(this);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
        this.handleTextClick = this.handleTextClick.bind(this);
        this.clear = this.clear.bind(this)
    }

    async getResourcesAxios(){
        const response =
          await axios.get("http://localhost:8080/getResources")
        console.log(response.data)
        let tiles = [];
        let currentComponent = this;
        let searchTiles = [];
        let CategoryTiles = [];
        response.data.forEach(function(doc) {
            tiles.push({
                id: doc.id,
                title: doc.title,
                content: doc.content,
                imgURL: doc.imgURL,
                Category: doc.Category
            });
            searchTiles.push({
                id: doc.id,
                title: doc.title,
                content: doc.content,
                imgURL: doc.imgURL,
                Category: doc.Category
            });
            CategoryTiles.push(doc.Category)
        });
        
        CategoryTiles = Array.from(new Set(CategoryTiles));
        currentComponent.setState({tiles: tiles});
        currentComponent.setState({searchTiles: searchTiles});
        currentComponent.setState({CategoryTiles: CategoryTiles});
    }

    componentDidMount() {
        this.getResourcesAxios()
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

    handleTextClick (e) {
        let tiles = this.state.tiles;
        if(e.option === '') {
            this.setState({searchTiles: tiles});
        }
        else {
            let dataList = this.state.tiles.filter(item => {
                if (e.option.trim() !== "") { 
                    if (!item['title'] || item['title'].toUpperCase().indexOf(e.option.toUpperCase()) === -1) {
                        return false
                    }
                }
                return true
            })
            this.setState({searchTiles: dataList});
            this.setState({searchTextStr: e.option})
        }
    }
    handleTextFieldChange (e) {
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
            });
            this.setState({searchTiles: dataList});
            this.setState({searchTextStr: e.target.value})
        }
    }

    handleCategoryClick= (e) => {
        console.log(e)
        let tiles = this.state.tiles;
        
        if(e.option === '') {
            this.setState({searchTiles: tiles});
        }
        else {
            let dataList = this.state.tiles.filter(item => {
                if (e.option.trim() !== "") { 
                    if (!item['Category'] || item['Category'].toUpperCase().indexOf(e.option.toUpperCase()) === -1) {
                        return false
                    }
                }
                return true
            })
            this.setState({searchTiles: dataList});
            this.setState({searchCategoryStr: e.option})
        }
    }

    handleCategoryChange = (e) => {
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
            });
            this.setState({searchTiles: dataList});
            this.setState({searchCategoryStr: e.target.value})
        }
    }

    clear() {
        let searchStr = this.state.searchCategoryStr;
        console.log('clear')
        if(this.state.searchTextStr === '' && this.state.searchCategoryStr === '') {
            let tiles = this.state.tiles;
            this.setState({searchTiles: tiles});
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
                <div className="background"/>
<<<<<<< HEAD
                    <div className={classes.root}>
                        <div className="resource_searchbar">
                            <span className="resource_searchbar_text">
                                Category:
                            </span>
                            <Autocomplete
                                freeSolo
                                autoHightlight
                                options={CategoryTiles.map(Category => Category)}
                                renderInput={params => (
                                <TextField {...params} placeholder="search by category.." margin="normal" variant="outlined" fullWidth onChange={this.handleCategoryChange} />
                                )}/>
                            <span className="resource_searchbar_text">
                                Resource:
                            </span>
                            <Autocomplete
                                freeSolo
                                autoHightlight
                                options={displayTiles.map(tile => tile.title)}
                                renderInput={params => (
                                <TextField {...params} placeholder="search.." margin="normal" variant="outlined" fullWidth onChange={this.handleTextFieldChange} />
                                )}/>
                        </div>
                        <div className="resource_content">
                            <GridList style={{width:"1540px"}} cellHeight={180} className={classes.gridList}>
                                    <GridListTile key="Subheader" cols={3} style={{ height: 'auto', }}>
                                        <ListSubheader component="div">Resources</ListSubheader>
                                    </GridListTile>
                                    {displayTiles.map((tile,i) => {
                                        return <ImgMediaCard key={i} tile={tile}/>
                                    })}
                            </GridList>
                        </div>
=======
                <div className={classes.root}>  
                <div style={{display: 'flex'}}>
                <span>
                    Category:
                </span>
                <Autocomplete
                    freeSolo
                    autoHightlight
                    options={CategoryTiles.map(Category => Category)}
                    disableClearable
                    renderOption = {(option, {selected}) => (
                        <React.Fragment>
                            <ListItemText primary={option} onClick={event => this.handleCategoryClick({option})}/>
                        </React.Fragment>
                    )}
                    renderInput={params => (
                    <TextField {...params} placeholder="search by category.." margin="normal" variant="outlined" fullWidth onChange={this.handleCategoryChange} />
                    )}/>
                <span>
                    Resource:
                </span>
                    <Autocomplete
                    freeSolo
                    autoHightlight
                    disableClearable
                    options={displayTiles.map(tile => tile.title)}
                    renderOption = {(option, {selected}) => (
                        <React.Fragment>
                            <ListItemText primary={option} onClick={event => this.handleTextClick({option})}/>
                        </React.Fragment>
                    )}
                    renderInput={params => (
                    <TextField {...params} placeholder="search.." margin="normal" variant="outlined" fullWidth onChange={this.handleTextFieldChange} />
                    )}/>
                </div>   
                    <GridList style={{marginLeft: 50,marginRight: 'auto'}}cellHeight={180} className={classes.gridList}>
                            <GridListTile key="Subheader" cols={3} style={{ height: 'auto', }}>
                                <ListSubheader component="div">Resources</ListSubheader>
                            </GridListTile>
                            {displayTiles.map((tile,i) => {
                                return <ImgMediaCard key={i} tile={tile}/>
                            })}
                    </GridList>
>>>>>>> 57c7d008a7809f525c1380bc5f3df0aaf5e2ec02
                </div>
            </div>
        )
    }
}

export default Resource;