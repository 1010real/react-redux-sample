import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import TimelineApp from './TimelineApp.js';
import About from './About.js';
import Hello from './Hello.js';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Route exact path='/' component={TimelineApp} />
                <Route exact path='/about/:number' component={About} />
                <Route exact path='/hello' component={Hello} />
            </div>
        );
    }
}

export default Main;