import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import NavBar from "../components/NavBar/TOSNavBar"
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import ImgMediaCard from "../components/ResourceCard";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import ListItemText from '@material-ui/core/ListItemText';
import {db, firebase} from '../base'

class Resource extends Component{
    constructor(props){
        super(props);
        this.state = {
            tiles: [],
            searchTiles: [],
            CategoryTiles: [],
            searchCategoryStr: "",
            searchTextStr: "",
            userId: null,
            userName: "Please Log in to display user name",
            userEmail: null,
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        // this.search = this.search.bind(this);
        // this.clearSearch = this.clearSearch.bind(this);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
        this.handleTextClick = this.handleTextClick.bind(this);
        // this.clear = this.clear.bind(this)
        

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User logged in already or has just logged in.
                this.setState({userId:user.uid});
                this.setState({userName:user.email.substring(0, user.email.indexOf('@'))});
                this.setState({userEmail: user.email});
            } else {
                // User not logged in or has just logged out.
                this.setState({userId: null});
                this.setState({userName: "Please Log in to display user name"});
                this.setState({userEmail: null});
        }});
    }

    async getResourcesAxios(){
        const response =
          await axios.get("https://test2-plopyzswiq-uc.a.run.app/getResources")
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
                Category: doc.Category,
                URL: doc.URL,
                user: currentComponent.state.userId
            });
            searchTiles.push({
                id: doc.id,
                title: doc.title,
                content: doc.content,
                imgURL: doc.imgURL,
                Category: doc.Category,
                URL: doc.URL,
                user: currentComponent.state.userId
            });
            CategoryTiles.push(doc.Category)
        });
        
        CategoryTiles = Array.from(new Set(CategoryTiles));
        currentComponent.setState({tiles: tiles});
        currentComponent.setState({searchTiles: searchTiles});
        currentComponent.setState({CategoryTiles: CategoryTiles});
    }

    componentDidMount() {
        this.getResourcesAxios();
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
        let category = this.state.searchCategoryStr;
        if(e.option === '') {
            this.setState({searchTextStr: ''});
            if (category !== "") {
                return
            }
            else {
                this.setState({searchTiles: tiles});
            }
        }
        else {
            let dataList = this.state.tiles.filter(item => {
                if (e.option.trim() !== "") { 
                    if (!item['title'] || item['title'].toUpperCase().indexOf(e.option.toUpperCase()) === -1) {
                        return false
                    }
                }
                if (category !== "") {
                    if (!item['Category'] || item['Category'].toUpperCase().indexOf(category.toUpperCase()) === -1) {
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
        let category = this.state.searchCategoryStr;
        if(e.target.value === '') {
            this.setState({searchTextStr: ''});
            if (category !== "") {
                return
            }
            else {
                this.setState({searchTiles: tiles});
            }
        }
        else {
            let dataList = this.state.tiles.filter(item => {
                if (e.target.value.trim() !== "") { 
                    if (!item['title'] || item['title'].toUpperCase().indexOf(e.target.value.toUpperCase()) === -1) {
                        return false
                    }
                }
                if (category !== "") {
                    if (!item['Category'] || item['Category'].toUpperCase().indexOf(category.toUpperCase()) === -1) {
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
        let tiles = this.state.tiles;
        let text = this.state.searchTextStr;
        if(e.option === '') {
            this.setState({searchCategoryStr: ''})
            if (text !== "") {
                return
            }
            else {
                this.setState({searchTiles: tiles});
            }
        }
        else {
            let dataList = this.state.tiles.filter(item => {
                if (e.option.trim() !== "") { 
                    if (!item['Category'] || item['Category'].toUpperCase().indexOf(e.option.toUpperCase()) === -1) {
                        return false
                    }
                }
                if (text !== "") {
                    if (!item['title'] || item['title'].toUpperCase().indexOf(text.toUpperCase()) === -1) {
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
        let text = this.state.searchTextStr;
        
        if(e.target.value === '') {
            this.setState({searchCategoryStr: ''})
            if (text !== "") {
                return
            }
            else {
                this.setState({searchTiles: tiles});
            }
        }
        else {
            let dataList = this.state.tiles.filter(item => {
                if (e.target.value.trim() !== "") { 
                    if (!item['Category'] || item['Category'].toUpperCase().indexOf(e.target.value.toUpperCase()) === -1) {
                        return false
                    }
                }
                if (text !== "") {
                    if (!item['title'] || item['title'].toUpperCase().indexOf(text.toUpperCase()) === -1) {
                        return false
                    }
                }
                return true
            });
            this.setState({searchTiles: dataList});
            this.setState({searchCategoryStr: e.target.value})
        }
    }

    // clear() {
    //     let searchStr = this.state.searchCategoryStr;
    //     console.log('clear')
    //     if(this.state.searchTextStr === '' && this.state.searchCategoryStr === '') {
    //         let tiles = this.state.tiles;
    //         this.setState({searchTiles: tiles});
    //     }
    // }
    onClick(props)
    {
        axios.get(`https://test2-plopyzswiq-uc.a.run.app/${this.state.userId}`).then((res) => {
            console.log(res.data)
            let resourceIds = res.data;  
            resourceIds = resourceIds[0] 
            {resourceIds.length <= 5?
                resourceIds.push(props[0]):
                alert("Main page is full!")
            }
            alert("add current resource to main: "+ props[1]); //TODO pass tile title from child
            resourceIds = Array.from(new Set(resourceIds))
            axios.post("https://test2-plopyzswiq-uc.a.run.app/setUser", {
                email: this.state.userEmail,
                name: this.state.userName,
                resourceId: resourceIds,
                uid: this.state.userId}).then(res => {
                    console.log(res)
                })
        });
        
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
                    <div className={classes.root}>
                        <div className="resource_searchbar">
                            <span className="resource_searchbar_text">
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
                            <span className="resource_searchbar_text">
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
                                <TextField {...params} placeholder="search by resource.." margin="normal" variant="outlined" fullWidth onChange={this.handleTextFieldChange} />
                                )}/>
                        </div>
                        <div className="resource_content">
                            <GridList style={{width:"1175px"}} cellHeight={180} className={classes.gridList}>
                                    <GridListTile key="Subheader" cols={3} style={{ height: 'auto', }}>
                                        <ListSubheader component="div">Resources</ListSubheader>
                                    </GridListTile>
                                    {displayTiles.map((tile,i) => {
                                        return <ImgMediaCard key={i} tile={tile} onClick={this.onClick.bind(this)}/>
                                    })}
                            </GridList>
                        </div>
                </div>
            </div>
        )
    }
}

export default Resource;