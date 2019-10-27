import React from 'react';
import logo from './logo.svg';
import './App.css';
import TOSNavBar from './components/NavBar/TOSNavBar'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Resource from "./routes/Resource"
import Main from "./routes/Main"

function App() {
  return (
    // <div className="App">
    //   <TOSNavBar />
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
        <div>
          <Route exact path="/resource" component={Resource}/>
          <Route exact path="/" component={Main}/>
        </div>
    </Router>
  );
}

export default App;
