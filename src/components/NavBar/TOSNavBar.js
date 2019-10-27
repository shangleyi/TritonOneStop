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
                        <TOSNavBarMenuButton buttonText="ButtonA" />
                        <TOSNavBarMenuButton buttonText="ButtonB" />
                        <TOSNavBarMenuButton buttonText="ButtonC" />
                    </div>
                    <div className="search-container">
                        <TOSNavBarSearchBar />
                    </div>
                </div>
            </div>
        );
    }
}

class TOSNavBarSearchBar extends React.Component {
    render() {
        return (
            <div>
                <img src="http://via.placeholder.com/300x100" />
            </div>
        );
    };
}

class TOSNavBarMenuButton extends React.Component {
    constructor(props){
        super(props);
        this.buttonText=this.props.buttonText;
    }

    render() {
        return (
            <div className="NavBarMenuButton">
                <h1 className="NavBarMenuButtonTxt">{this.buttonText}</h1>
            </div>
        );
    }
}

export default TOSNavBar;

