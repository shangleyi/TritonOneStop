import React from 'react';
import './Square.css';
import TOSLogo from "../../resources/TOSLogo.png";

class Square extends React.Component {
    render() {
        return (
            <div className="SquareBody">
                <img src={TOSLogo} className="SquareImg"/>
                <h1>hi this is</h1>
                <p>Awesome Ste</p>
            </div>
        );
    }
}

export default Square;