import React from 'react';
import './TOSNavBar.css';
import TOSLogo from '../resources/TOSLogo.png';

class TOSNavBar extends React.Component {
    render() {
        return (
            <div className="NavBarBody">
                <div className="NavBarLogoBox">
                    <img className="NavBarLogo" alt="TOSLogo" src={TOSLogo} />
                </div>
            </div>
        );
    }
}

export default TOSNavBar;

