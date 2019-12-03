import React from 'react';
import './TOSNavBar.css';
import TOSLogo from '../../resources/NavBarLogo.png';
//import {Route, withRouter, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {db, firebase} from "../../base";
import axios from 'axios';

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
        └── firebase.auth(): Firebase authentication status, comes with a bit of delay, careful when using it
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
        this.handleSignUpError = this.handleSignUpError.bind(this);
        console.log("Current User at construct:");
        console.log(firebase.auth().currentUser);
        console.log("Current User Local Storage");
        console.log(localStorage.getItem("UserName"));
        console.log("Notice");
        console.log("");
        console.log("Notice");
        if(localStorage.getItem("UserName")!==null && localStorage.getItem("UserName")!=="null") {
            this.state={isLoggedIn: true, userName: localStorage.getItem("UserName"), userPW: ""};
        }
        else {
            this.state={isLoggedIn: false, userName: null, userPW: null};
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
            "\nUser ID: ", (firebase.auth().currentUser==null) ? "null" : firebase.auth().currentUser.uid,
            "\nLocalStorage: ", localStorage.getItem("UserName"));

        // Actual login
        try{
            firebase.auth().signInWithEmailAndPassword(this.state.userName, this.state.userPW).catch(this.handleLogInError);
            // firebase.auth().signInWithEmailAndPassword(this.state.userName, this.state.userPW).catch(this.handleLogInError).then(res => {
            //     axios.post("http://localhost:8080/setUser", {
            //         email: res.user.email,
            //         name: res.user.email.substring(0, res.user.email.indexOf('@')),
            //         resourceId: [18, 11, 10, 8, 17, 15],
            //         uid: res.user.uid,
            //     });
            // });
            localStorage.setItem("UserName", this.state.userName);
            console.log("NavBar: Log-In: TRUE");
            this.setState({isLoggedIn: true});
        } catch (error) {
            alert(error);
            console.log("NavBar: Log-In: FALSE");
        }

        console.log("Handle LogIn: After Log In:",
            "\nUser ID: ", (firebase.auth().currentUser==null) ? "null" : firebase.auth().currentUser.uid,
            "\nLocalStorage: ", localStorage.getItem("UserName"));
    }

    handleSignUpError(error) {
        alert(error);
        this.setState({isLoggedIn: false});
        console.log("NavBar: Signup, FALSE");
        localStorage.setItem("UserName", null);
    }

    handleSignUp(){
        console.log("handleSignUp: ATTEMPT");
        console.log("Handle SignUp: Before SignUp:",
            "\nUser ID: ", (firebase.auth().currentUser==null) ? "null" : firebase.auth().currentUser.uid,
            "\nLocalStorage: ", localStorage.getItem("UserName"));

        try{
            //firebase.auth().createUserWithEmailAndPassword(this.state.userName, this.state.userPW).catch(this.handleSignUpError);
            firebase.auth().createUserWithEmailAndPassword(this.state.userName, this.state.userPW).catch(this.handleSignUpError).then(res => {

                    //console.log("user email:   ");
                    //console.log(firebase.auth().currentUser.email);
                    //console.log("user id:     ");
                    //console.log(firebase.auth().currentUser.uid);

                    axios.post("http://localhost:8080/setUser", {
                        email: firebase.auth().currentUser.email,
                        name: firebase.auth().currentUser.email.substring(0, firebase.auth().currentUser.email.indexOf('@')),
                        resourceId: [18, 11, 10, 8, 17, 15],
                        uid: firebase.auth().currentUser.uid,
                    });
            });
            console.log("NavBar: SignUp");
            alert("Signing Up with email" + this.state.userName + ", if no error pops up, sign up is success");
        } catch (error) {
            alert(error);
            console.log("Failed to SignUp");
        }

        console.log("Handle SignUp: After SignUp:",
            "\nUser ID: ", (firebase.auth().currentUser==null) ? "null" : firebase.auth().currentUser.uid,
            "\nLocalStorage: ", localStorage.getItem("UserName"));
    }

    handleLogOut(){
        console.log("HandleLogOut: ATTEMPT");
        console.log("Handle LogOut: Before Logout:",
            "\nUser ID: ", (firebase.auth().currentUser==null) ? "null" : firebase.auth().currentUser.uid,
            "\nLocalStorage: ", localStorage.getItem("UserName"));
        console.log("NavBar: Log-In: FALSE");

        firebase.auth().signOut();
        localStorage.setItem("UserName", null);
        this.setState({isLoggedIn: false});

        console.log("Handle LogOut: After Logout:",
            "\nUser ID: ", (firebase.auth().currentUser==null) ? "null" : firebase.auth().currentUser.uid,
            "\nLocalStorage: ", localStorage.getItem("UserName"));
    }

    handleForget() {
        let email = prompt("Please enter your email:", "forgot@email.com");
        firebase.auth().sendPasswordResetEmail(email);
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
        if(localStorage.getItem("UserName")!==null && localStorage.getItem("UserName")!=="null") {
            this.props.history.push("/courseplanner");
        }
        else {
            alert("Please login to access course planner");
        }
    };

    render() {
        if(!this.state.isLoggedIn) {
            return (
                <div className="NavBarBody">
                    <img className="NavBarLogo" alt="TOSLogo" src={TOSLogo} onClick={this.handleClickMain}/>
                    <div className="NavBarMenu">
                        <div className="button-container">
                            <div className="NavBarMenuButtonContainer">
                                <button className="NavBarMenuButton" onClick={this.handleClickResource} style={{width: 150}}>Resource</button>
                            </div>
                            <div className="NavBarMenuButtonContainer">
                                <button className="NavBarMenuButton" onClick={this.handleClickEvent} style={{width: 90}}>Event</button>
                            </div>
                            <div className="NavBarMenuButtonContainer">
                                <button className="NavBarMenuButton" onClick={this.handleClickCoursePlanner} style={{width: 240}}>CoursePlanner</button>
                            </div>
                        </div>
                        <div className="NavBarLogger">
                            <div>
                                <div className="logger-container">
                                    <p className="loggerTxt">Email:</p>
                                    <input className="logger-input" placeholder="Email" onChange={this.handleUsernameChange}/>
                                </div>
                                <div className="logger-container">
                                    <p className="loggerTxt">Password:</p>
                                    <input className="logger-input" placeholder="Password" onChange={this.handlePWChange} type="password"/>
                                </div>
                            </div>
                            <div className="logger-button-container">
                                <button className="logger-button" onClick={this.handleLogIn}>Login</button>
                                <button className="logger-button" onClick={this.handleSignUp}>SignUp</button>
                            </div>
                            <button className="logger-button-2" onClick={this.handleForget}>ForgotPW</button>
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
                            <div className="NavBarMenuButtonContainer">
                                <button className="NavBarMenuButton" onClick={this.handleClickResource} style={{width: 150}}>Resource</button>
                            </div>
                            <div className="NavBarMenuButtonContainer">
                                <button className="NavBarMenuButton" onClick={this.handleClickEvent} style={{width: 90}}>Event</button>
                            </div>
                            <div className="NavBarMenuButtonContainer">
                                <button className="NavBarMenuButton" onClick={this.handleClickCoursePlanner} style={{width: 240}}>CoursePlanner</button>
                            </div>
                        </div>
                        <div>
                            <div className="logged-in-container">
                                <p className="loggerTxt">Logged In As: {this.state.userName}</p>
                                <button className="logout-button" onClick={this.handleLogOut}>Log Out</button>
                            </div>
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
