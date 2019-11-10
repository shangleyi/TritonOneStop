import React from 'react';
import './TOSNavBar.css';
import TOSLogo from '../../resources/NavBarLogo.png';
//import {Route, withRouter, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import db_login from "../../database/base";


class TOSNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={isLoggedIn: false, userName: null, userPW: null};
        this.handleClickResource = this.handleClickResource.bind(this);
        this.handleClickEvent = this.handleClickEvent.bind(this);
        this.handleClickMain = this.handleClickMain.bind(this);
        this.handleClickCoursePlanner = this.handleClickCoursePlanner.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleLogInError = this.handleLogInError.bind(this);
    }

    handleLogInError(error) {
        alert(error);
        this.setState({isLoggedIn: false});
    }

    handleLogIn(){
        console.log(this.state);
        try{
            db_login.auth().signInWithEmailAndPassword(this.state.userName, this.state.userPW).catch(this.handleLogInError);
            console.log("NavBar: Log-In: TRUE");
            this.setState({isLoggedIn: true});

        } catch (error) {
            alert(error);
            console.log("Failed to login");
        }
    }

    handleSignUp(){
        try{
            db_login.auth().createUserWithEmailAndPassword(this.state.userName, this.state.userPW);
            console.log("NavBar: SignUp");
            alert("Signed Up with email" + this.state.userName)
        } catch (error) {
            alert(error);
            console.log("Failed to login");
        }
    }

    handleUsernameChange = (event) => {
        //console.log("New UserName:" + event.target.value);
        this.setState({userName: event.target.value});
        //console.log(this.state)
    };

    handlePWChange = (event) => {
        //console.log("New PW:" + event.target.value);
        this.setState({userPW: event.target.value});
    };

    handleLogOut(){
        console.log("NavBar: Log-In: FALSE");
        console.log(db_login.auth());
        db_login.auth().signOut();
        console.log(db_login.auth());
        this.setState({isLoggedIn: false});
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
        if(!this.state.isLoggedIn) {
            return (
                <div className="NavBarBody">
                    <img className="NavBarLogo" alt="TOSLogo" src={TOSLogo} onClick={this.handleClickMain}/>
                    <div className="NavBarMenu">
                        <div className="button-container">
                            <TOSNavBarMenuButton onPress={this.handleClickResource} buttonText="Resource"/>
                            <TOSNavBarMenuButton onPress={this.handleClickEvent} buttonText="Event"/>
                            <TOSNavBarMenuButton onPress={this.handleClickCoursePlanner} buttonText="CoursePlanner"/>
                        </div>
                        <div>
                            <div className="logger-container">
                                <p className="loggerTxt">User Name:</p>
                                <input placeholder="Name" onChange={this.handleUsernameChange}/>
                                <button className="logger-button" onClick={this.handleLogIn}>Login</button>
                            </div>
                            <div className="logger-container">
                                <p className="loggerTxt">Password:</p>
                                <input placeholder="PW" onChange={this.handlePWChange}/>
                                <button className="logger-button" onClick={this.handleSignUp}>SignUp</button>
                            </div>
                        </div>
                        <div className="search-container">
                            <TOSNavBarSearchBar/>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="NavBarBody">
                    <img className="NavBarLogo" alt="TOSLogo" src={TOSLogo} onClick={this.handleClickMain}/>
                    <div className="NavBarMenu">
                        <div className="button-container">
                            <TOSNavBarMenuButton onPress={this.handleClickResource} buttonText="Resource"/>
                            <TOSNavBarMenuButton onPress={this.handleClickEvent} buttonText="Event"/>
                            <TOSNavBarMenuButton onPress={this.handleClickCoursePlanner} buttonText="CoursePlanner"/>
                        </div>
                        <div>
                            <div className="logged-in-container">
                                <p className="loggerTxt">Logged In As: {this.state.userName}</p>
                                <button className="logger-button" onClick={this.handleLogOut}>Log Out</button>
                            </div>
                        </div>
                        <div className="search-container">
                            <TOSNavBarSearchBar/>
                        </div>
                    </div>
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
