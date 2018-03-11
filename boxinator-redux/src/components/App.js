/**
 * simple header and routes
 */
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import ListItemsPage from './views/ListItemsPage';
import AddBoxPage from './views/AddBoxPage';
import HomePage from './views/HomePage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Link to="/">Home</Link>
          {' | '}
          <Link to="listboxes">Box list</Link>
          {' | '}
          <Link to="addbox">Add new Box</Link>
        </p>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/listboxes" component={ListItemsPage} />
        <Route exact path="/addbox" component={AddBoxPage} />
      </div>
    );
  }
}

export default App;
