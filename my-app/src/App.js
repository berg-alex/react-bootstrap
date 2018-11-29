import React, { Component } from 'react';
import './App.css';
import NavbarPage from './components/NavbarPage';
import MyJumbotron from './components/myJumbotron';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavbarPage/>
          <MyJumbotron/>
        </header>
      </div>
    );
  }
}

export default App;
