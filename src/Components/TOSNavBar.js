import React from 'react';
import './TOSNavBar.css';
import TOSLogo from '../resources/TOSLogo.png';

class TOSNavBar extends React.Component {
    render() {
        return (
            <div className="NavBarBody">
                <div className="NavBarLogoBox">
                    <img className="NavBarLogo" src={TOSLogo} width="200" height="200" />
                </div>
            </div>
        );
    }
}

export default TOSNavBar;

