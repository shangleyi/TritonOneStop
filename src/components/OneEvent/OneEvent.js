import React from 'react';
import './OneEvent.css';
import TOSLogo from "../../resources/TOSLogo.png";

class OneEvent extends React.Component {
    render() {
        return (
            <div className="OneEventBody">
                <img src={TOSLogo} className="OneEventImg"/>
                <h1>hi this is</h1>
                <p>sly</p>
            </div>
        );
    }
}

export default OneEvent;