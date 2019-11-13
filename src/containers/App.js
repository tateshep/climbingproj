import React from 'react';
import './App.css';
import 'terminal.css';

import Workouts from '../containers/Workouts/Workouts';
import NewWorkout from './Workouts/NewWorkout/NewWorkout';

function App() {
  return (
    <div className="App">
      <header><a>Nav1</a><a>Nav2</a><a>Nav3</a></header>
      <Workouts />
      <NewWorkout />

    </div>
  );
}

export default App;
