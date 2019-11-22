import React, { Component } from 'react';

import axios from '../../../axios-workouts';
import BaseFitness from './WorkoutForms/BaseFitness';
import Strength from './WorkoutForms/Strength';
import Power from './WorkoutForms/Power';
import PowerEndurance from './WorkoutForms/PowerEndurance';
import Endurance from './WorkoutForms/Endurance';
import Performance from './WorkoutForms/Performance';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class NewWorkout extends Component {
    // going to leave this here instead of moving to redux
    // because I sort of want it to stay local
    state = {
        workoutType: 'Strength',
        title: '',
        description: '',
        exercises: {},
        loading: false,
        
    }

    submitTypeHandler = (event,) => {
        let workoutType = event.target.value;
        this.setState({workoutType: workoutType});
    }

    submitHandler = () => {
        let workout = {
           title: this.state.title,
           description: this.state.description,
           workoutType: this.state.workoutType,
           
        }

        console.log(workout);    
        axios.post('/workouts.json', workout)
        .then(response => {
            this.setState({loading:false});
        })
        .catch(error => {
            this.setState({loading:false});
            console.log(error)});
    }

    titleChangedHandler = (event) => {
        let newTitle = event.target.value
        this.setState({title: newTitle})
    }
    descriptionChangedHandler = (event) => {
        let newDescription = event.target.value
        this.setState({description: newDescription})
    }

    render () {
        const workoutForm = (workoutType) => {
            switch(workoutType) {
                case ('Base Fitness'):
                    return (<BaseFitness titleChange={(event) => this.titleChangedHandler(event)} workoutType={this.state.workoutType} />);
                case ('Strength'):
                        return (<Strength titleChange={(event) => this.titleChangedHandler(event)} workoutType={this.state.workoutType} workoutType={this.state.workoutType} />);
                case ('Power'):
                    return (<Power workoutType={this.state.workoutType} />);
                case ('Power Endurance'):
                        return (<PowerEndurance workoutType={this.state.workoutType} />);
                case ('Endurance'):
                    return (<Endurance workoutType={this.state.workoutType} />);
                case ('Performance'):
                        return (<Performance workoutType={this.state.workoutType} />);
                default:
                    return (<BaseFitness workoutType={this.state.workoutType} />);
            }
        }
        return (
            <div>

                <FormControl>
                    <InputLabel id="workout-select">Workout Type</InputLabel>
                    <Select
                        labelId="workout-select"
                        id="workout-select-id"
                        style={{width:'200px'}}
                        value={this.state.workoutType}
                        onChange={(event) => this.submitTypeHandler(event)} id="select-type"
                        >
                            <MenuItem value="Base Fitness">Base Fitness</MenuItem>
                            <MenuItem value="Strength">Strength</MenuItem>
                            <MenuItem value="Power">Power</MenuItem>
                            <MenuItem value="Power Endurance">Power Endurance</MenuItem>
                            <MenuItem value="Endurance">Endurance</MenuItem>
                            <MenuItem value="Performance">Performance</MenuItem>
                    </Select>
                </FormControl>

                { workoutForm(this.state.workoutType) }

                <Button variant="contained" color="primary" onClick={this.submitHandler} className="btn btn-default" >Submit</Button>
            </div>
        )
    }
}

export default NewWorkout;