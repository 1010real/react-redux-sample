import React, { Component } from 'react';
import './App.css';

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <h2 style={{marginTop: "4px"}}>へっだあ</h2>

                <a href="/hello">へろー</a>:
                <a href="/about/1">1について</a>:
                <a href="/about/2">2について</a>:
                <a href="/">たいむらいん</a>:
            </div>
        );
    }
}

export default Header;