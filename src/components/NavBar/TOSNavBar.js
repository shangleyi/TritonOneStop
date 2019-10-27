import React from 'react';
import './TOSNavBar.css';
import TOSLogo from '../../resources/NavBarLogo.png';

class TOSNavBar extends React.Component {

    logoClick() {
        console.log('Clicked logo');
        // TODO shall return to front page
    }

    render() {
        return (
            <div className="NavBarBody">
                <img className="NavBarLogo" alt="TOSLogo" src={TOSLogo} onClick={this.logoClick} />
                <div className="NavBarMenu">
                    <div className="button-container">
                        <TOSNavBarMenuButton buttonText="Resource" />
                        <TOSNavBarMenuButton buttonText="Event" />
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
            <div>
                <input placeholder="Search  .." className="input-box"/>
                <button>Search</button>
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

    buttonClick() {
        console.log('Clicked logo');
        // TODO shall return to front page
    }

    render() {
        return (
            <div className="NavBarMenuButtonContainer">
                <button className="NavBarMenuButton" onClick={this.buttonClick}>{this.buttonText}</button>
            </div>
        );
    }
}

export default TOSNavBar;

