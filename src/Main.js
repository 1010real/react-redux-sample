import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import TimelineApp from './TimelineApp.js';
import About from './About.js';
import Hello from './Hello.js';
import Human from './Human.js';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route exact path='/' component={TimelineApp} />
                    <Route exact path='/about/:number' component={About} />
                    <Route exact path='/hello' component={Hello} />
                    <Route exact path='/human' component={Human} />
                </Switch>
            </div>
        );
    }
}

export default Main;