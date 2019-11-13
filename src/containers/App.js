import React from 'react';
import './App.css';
import 'terminal.css';

import Workouts from '../containers/Workouts/Workouts';
import NewWorkout from './Workouts/NewWorkout/NewWorkout';
import Navigation from '../components/UI/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Workouts />
      <NewWorkout />

    </div>
  );
}

export default App;
