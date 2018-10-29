import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import Nav from './components/Nav'

class App extends Component {
render() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="box header App-header">
        <h1>Explore awesome things around.</h1>
        </header>
        <nav className="box navbar">
          { <Nav /> }
        </nav>
        <main className="box content">
          { <Map /> }
        </main>
        <footer className="box footer">
          <h2>The footer</h2>
        </footer>
      </div>
    </div>
    );
  }
}

export default (App);
