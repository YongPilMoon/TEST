import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      console.log("logo svg" + logo);
    return (
      <div className="App">
        <header className="App-header">
            <svg>
                <use xlinkHref={`${logo}#test`}/>
            </svg>
          <h1 className="App-title">Welcome to React test4</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
