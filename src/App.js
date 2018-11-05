import React, { Component } from 'react';
import './App.css';
import Maps from './components/Map';

//import Nav from './components/Nav';


class App extends Component {
render() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header App-header">
        <h1>Explore awesome things around.</h1>
        
        </header>
        <main className="main">
          { <Maps aria-label = "map"/> }
        </main>
      </div>
    </div>
    );
  }
}

export default (App);
