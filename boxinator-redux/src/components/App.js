import React, { Component } from 'react';
import Routes from '../Routes'
import logo from '../fortnox-logo.jpg';
import '../css/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Boxinator</h1>
        </header>
        <Routes />
      </div>
    );
  }
}

export default App;
