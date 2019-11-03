import React from 'react';
import './TOSNavBar.css';
import TOSLogo from '../../resources/NavBarLogo.png';
import searchicon from '../../resources/search_icon.png';
import {Route, withRouter, Redirect} from 'react-router-dom';

class TOSNavBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickResource = this.handleClickResource.bind(this);
        this.handleClickEvent = this.handleClickEvent.bind(this);
        this.handleClickMain = this.handleClickMain.bind(this);
    }
    logoClick() {
        console.log('Clicked logo');
        // TODO shall return to front page
    }

    handleClickResource = () => {
        this.props.history.push("/resource");
    };

    handleClickEvent = () => {
        this.props.history.push("/event");
    };

    handleClickMain = () => {
        this.props.history.push("/");
    };

    render() {
        return (
            <div className="NavBarBody">
                <img className="NavBarLogo" alt="TOSLogo" src={TOSLogo} onClick={this.handleClickMain}/>
                <div className="NavBarMenu">
                    <div className="button-container">
                        <TOSNavBarMenuButton onPress={this.handleClickResource} buttonText="Resource" />
                        <TOSNavBarMenuButton onPress={this.handleClickEvent} buttonText="Event" />
                    </div>
                    <TOSLogger/>
                    <div className="search-container">
                        <TOSNavBarSearchBar />
                    </div>
                </div>
            </div>
        );
    }
}

class TOSLogger extends React.Component {
    render() {
        return (
            <div>
                <div className="logger-container">
                    <p className="loggerTxt">User Name:</p>
                    <input placeholder="Name"/>
                </div>
                <div className="logger-container">
                    <p className="loggerTxt">Password:</p>
                    <input placeholder="PW"/>
                </div>
            </div>
        );
    }

}

class TOSNavBarSearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <input placeholder="   Search....." className="search-input-box"/>
                <button className="search-button"><img className="search-icon" alt="searchicon" src={searchicon}></img></button>
            </div>
        );
    };
}

class TOSNavBarMenuButton extends React.Component {
    constructor(props){
        super(props);
        this.buttonText=this.props.buttonText;
        this.state={buttonText: this.props.buttonText};
    }

    render() {
        const {onPress} = this.props;
        return (
            <div className="NavBarMenuButtonContainer">
                <button className="NavBarMenuButton" onClick={onPress}>{this.buttonText}</button>
            </div>
        );
    }
}
export default withRouter(TOSNavBar);
