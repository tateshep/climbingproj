import React, { Component } from 'react';
import './App.css';
import 'terminal.css';

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Workouts from '../containers/Workouts/Workouts';
import NewWorkout from './Workouts/NewWorkout/NewWorkout';
import Navigation from '../components/UI/Navigation/Navigation';

class App extends Component {
  render () {
    return (
      <BrowserRouter> 
        <div className="App">
          <Navigation />
          <Route path="/history" component={Workouts} />
          <Route path="/" exact component={NewWorkout} />
        </div>
      </BrowserRouter>
      )
  }
}
export default App;
