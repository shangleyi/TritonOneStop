import React from 'react';
import './TOSNavBar.css';
import TOSLogo from '../../resources/NavBarLogo.png';
//import {Route, withRouter, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import db_login from "../../database/base";


class TOSNavBar extends React.Component {
    /*
        Important data fields:
        ├── this.state:
        |   ├── isLoggedIn: Used to determine UI rendering,
        |   |               initialized according to local storage when starting, will be updated when login and logout.
        |   ├── userName:   Used to pass userName from input to signup and login
        |   └── userPW:     Used to pass PW from input to signup and login
        |
        ├── localStorage:   Stores userName locally in case user refreshes the page, will only be updated when login and
        |                   logout.
        └── db_login.auth(): Firebase authentication status, comes with a bit of delay, careful when using it
     */

    constructor(props) {
        super(props);
        this.handleClickResource = this.handleClickResource.bind(this);
        this.handleClickEvent = this.handleClickEvent.bind(this);
        this.handleClickMain = this.handleClickMain.bind(this);
        this.handleClickCoursePlanner = this.handleClickCoursePlanner.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleLogInError = this.handleLogInError.bind(this);
        console.log("Current User at construct:");
        console.log(db_login.auth().currentUser);
        if(localStorage.getItem("UserName")==="null") {
            this.state={isLoggedIn: false, userName: null, userPW: null};
        }
        else {
            this.state={isLoggedIn: true, userName: localStorage.getItem("UserName"), userPW: ""};
        }
    }

    handleLogInError(error) {
        alert(error);
        this.setState({isLoggedIn: false});
        console.log("NavBar: Log-In: Fake TRUE, FALSE");
        localStorage.setItem("UserName", null);
    }

    handleLogIn(){
        console.log("HandleLogIn: ATTEMPT");
        console.log("Handle LogIn: Before Log In:",
            "\nUser ID: ", (db_login.auth().currentUser==null) ? "null" : db_login.auth().currentUser.uid,
            "\nLocalStorage: ", localStorage.getItem("UserName"));

        // Actual login
        try{
            console.log("NavBar: Log-In: TRUE");
            this.setState({isLoggedIn: true});
            db_login.auth().signInWithEmailAndPassword(this.state.userName, this.state.userPW).catch(this.handleLogInError);
            localStorage.setItem("UserName", this.state.userName);
        } catch (error) {
            alert(error);
            console.log("NavBar: Log-In: FALSE");
        }

        console.log("Handle LogIn: After Log In:",
            "\nUser ID: ", (db_login.auth().currentUser==null) ? "null" : db_login.auth().currentUser.uid,
            "\nLocalStorage: ", localStorage.getItem("UserName"));
    }

    handleSignUp(){
        console.log("handleSignUp: ATTEMPT");
        console.log("Handle SignUp: Before SignUp:",
            "\nUser ID: ", (db_login.auth().currentUser==null) ? "null" : db_login.auth().currentUser.uid,
            "\nLocalStorage: ", localStorage.getItem("UserName"));

        try{
            db_login.auth().createUserWithEmailAndPassword(this.state.userName, this.state.userPW);
            console.log("NavBar: SignUp");
            alert("Signed Up with email" + this.state.userName)
        } catch (error) {
            alert(error);
            console.log("Failed to SignUp");
        }

        console.log("Handle SignUp: After SignUp:",
            "\nUser ID: ", (db_login.auth().currentUser==null) ? "null" : db_login.auth().currentUser.uid,
            "\nLocalStorage: ", localStorage.getItem("UserName"));
    }

    handleLogOut(){
        console.log("HandleLogOut: ATTEMPT");
        console.log("Handle LogOut: Before Logout:",
            "\nUser ID: ", (db_login.auth().currentUser==null) ? "null" : db_login.auth().currentUser.uid,
            "\nLocalStorage: ", localStorage.getItem("UserName"));
        console.log("NavBar: Log-In: FALSE");

        db_login.auth().signOut();
        localStorage.setItem("UserName", null);
        this.setState({isLoggedIn: false});

        console.log("Handle LogOut: After Logout:",
            "\nUser ID: ", (db_login.auth().currentUser==null) ? "null" : db_login.auth().currentUser.uid,
            "\nLocalStorage: ", localStorage.getItem("UserName"));
    }

    handleUsernameChange = (event) => {
        this.setState({userName: event.target.value});
    };

    handlePWChange = (event) => {
        this.setState({userPW: event.target.value});
    };

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
                            <TOSNavBarMenuButton onPress={this.handleClickResource} buttonText="Resource" width="200px"/>
                            <TOSNavBarMenuButton onPress={this.handleClickEvent} buttonText="Event" width="200px"/>
                            <TOSNavBarMenuButton onPress={this.handleClickCoursePlanner} buttonText="CoursePlanner" width="200px"/>
                        </div>
                        <div>
                            <div className="logger-container">
                                <p className="loggerTxt">Email:</p>
                                <input className="logger-input" placeholder="Name" onChange={this.handleUsernameChange}/>
                                <button className="logger-button" onClick={this.handleLogIn}>Login</button>
                            </div>
                            <div className="logger-container">
                                <p className="loggerTxt">Password:</p>
                                <input className="logger-input" placeholder="PW" onChange={this.handlePWChange} type="password"/>
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
                <button className="search-button"/>
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
