import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ListItemsPage from './components/views/ListItemsPage';
import AddBoxPage from './components/views/AddBoxPage';
import HomePage from './components/views/HomePage';
import NotFoundPage from './components/views/NotFoundPage';


const Routes = () => (
    <div>
        <p className="App-intro">
        <Link to="/">Home</Link>
        {' | '}
        <Link to="listboxes">Box list</Link>
        {' | '}
        <Link to="addbox">Add new Box</Link>
        </p>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/listboxes" component={ListItemsPage} />
            <Route exact path="/addbox" component={AddBoxPage} />
            <Route path="*" component={NotFoundPage} />
        </Switch>
    </div>
)

export default Routes;