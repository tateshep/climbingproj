import React, { Component } from 'react';

import axios from '../../../axios-workouts';
import BaseFitness from './WorkoutForms/BaseFitness';
import Strength from './WorkoutForms/Strength';
import Power from './WorkoutForms/Power';
import PowerEndurance from './WorkoutForms/PowerEndurance';
import Endurance from './WorkoutForms/Endurance';
import Performance from './WorkoutForms/Performance';
import Button from '@material-ui/core/Button';


const style = {
    root: 
    {
    marginLeft: '5%',
    marginRight: '5%'
    },
}

class NewWorkout extends Component {
    // going to leave this here instead of moving to redux
    // because I sort of want it to stay local
    state = {
        workoutType: 'Base Fitness',
        title: '',
        description: '',
        loading: false,
    }

    submitTypeHandler = (event,) => {
        let workoutType = event.target.value;
        this.setState({workoutType: workoutType});
    }

    submitHandler = () => {
        let workout = {
           title: this.state.title,
           description: this.state.description
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
                        return (<Strength workoutType={this.state.workoutType} />);
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
            <div style={style.root}>

                <form>
                    <fieldset>
                        <legend>Workout Type</legend>
                        <div className="form-group">
                            <label htmlFor="select-type">Select Workout Type</label>
                            <select onChange={(event) => this.submitTypeHandler(event)} id="select-type">
                                <option value="Base Fitness">Base Fitness</option>
                                <option value="Strength">Strength</option>
                                <option value="Power">Power</option>
                                <option value="Power Endurance">Power Endurance</option>
                                <option value="Endurance">Endurance</option>
                                <option value="Performance">Performance</option>
                            </select>
                        </div>
                    </fieldset>
                </form>
                
                { workoutForm(this.state.workoutType) }

                <Button variant="contained" color="primary" onClick={this.submitHandler} className="btn btn-default" >Submit</Button>
            </div>
        )
    }
}

export default NewWorkout;