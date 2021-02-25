import React, { Component } from 'react';
import logo from './logo.svg';
import Declarative from './Components/Declarative';
import Components from './Components/Components';
import Singleway from './Components/Singleway';
import JSX from './Components/JSX';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            className="Ironhack-logo"
            src="./images/ironhack-logo.svg"
            alt="Ironhack logo"
          />
          {/* <img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="Header">Say hello to ReactJS</h1>
          <p className="Paragraph">
            You will learn a Frontend framework from scratch to become a Ninka
            Developer.
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Awesome!
            {/*Learn React*/}
          </a>
          <div className="Components-Styling">
            <Declarative />
            <Components />
            <Singleway />
            <JSX />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
