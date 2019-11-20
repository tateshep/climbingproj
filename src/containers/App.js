import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/UI/Navigation/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render () {
    return (

        <div className="App">
          <BrowserRouter>
          <Navigation />
          </BrowserRouter>
        </div>

      )
  }
}
export default App;
