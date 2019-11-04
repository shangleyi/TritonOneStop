import React from 'react';
import './TOSNavBar.css';
import TOSLogo from '../../resources/NavBarLogo.png';
//import {Route, withRouter, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class TOSNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickResource = this.handleClickResource.bind(this);
        this.handleClickEvent = this.handleClickEvent.bind(this);
        this.handleClickMain = this.handleClickMain.bind(this);
        this.handleClickCoursePlanner = this.handleClickCoursePlanner.bind(this);
    }

    handleLoggedIn(){
        console.log("value has been set to true");
    }

    handleLoggedOut(){
        console.log("value has been set to false");
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

    handleClickCoursePlanner = () => {
        this.props.history.push("/courseplanner");
    };

    render() {
        return (
            <div className="NavBarBody">
                <img className="NavBarLogo" alt="TOSLogo" src={TOSLogo} onClick={this.handleClickMain}/>
                <div className="NavBarMenu">
                    <div className="button-container">
                        <TOSNavBarMenuButton onPress={this.handleClickResource} buttonText="Resource" />
                        <TOSNavBarMenuButton onPress={this.handleClickEvent} buttonText="Event" />
                        <TOSNavBarMenuButton onPress={this.handleClickCoursePlanner} buttonText="CoursePlanner" />
                    </div>
                    <TOSLogger handleLoggedIn={this.handleLoggedIn.bind(this)} handleLoggedOut={this.handleLoggedOut.bind(this)}/>
                    <div className="search-container">
                        <TOSNavBarSearchBar />
                    </div>
                </div>
            </div>
        );
    }
}

class TOSLogger extends React.Component {
    constructor(props) {
        super(props);
        this.state={isLoggedIn: false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
        console.log("Logger: Set isLoggedIn to TRUE");
        this.props.handleLoggedIn();
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
        console.log("Logger: Set isLoggedIn to FALSE");
        this.props.handleLoggedOut();
    }

    render() {
        if(!this.state.isLoggedIn) {
            return(
                <div>
                    <div className="logger-container">
                        <p className="loggerTxt">User Name:</p>
                        <input placeholder="Name"/>
                        <button className="logger-button" onClick={this.handleLoginClick}>Login</button>
                    </div>
                    <div className="logger-container">
                        <p className="loggerTxt">Password:</p>
                        <input placeholder="PW"/>
                        <button className="logger-button">SignUp</button>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div className="logged-in-container">
                    <p className="loggerTxt">Logged In As: $$Put user name here$$</p>
                    <button className="logger-button" onClick={this.handleLogoutClick}>Log Out</button>
                </div>
            );
        }
    }

}

class TOSNavBarSearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <input placeholder="   Search....." className="search-input-box"/>
                <button className="search-button"></button>
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
