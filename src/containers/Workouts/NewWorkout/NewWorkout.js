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
import { connect } from 'react-redux';

class NewWorkout extends Component {
    // going to leave this here instead of moving to redux
    // because I sort of want it to stay local


    // submitTypeHandler = (event,) => {
    //     let workoutType = event.target.value;
    //     this.setState({workoutType: workoutType});
    // }

    submitHandler = () => {
        let workout = {
           title: this.props.title,
           comments: this.props.comments,
           workoutType: this.props.workoutType,
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

    // descriptionChangedHandler = (event) => {
    //     let newDescription = event.target.value
    //     this.setState({description: newDescription})
    // }

    render () {
        const workoutForm = (workoutType) => {
            switch(workoutType) {
                case ('Base Fitness'):
                    return (<BaseFitness />);
                case ('Strength'):
                        return (<Strength titleChange={(event) => this.titleChangedHandler(event)} workoutType={this.props.workoutType} workoutType={this.props.workoutType} />);
                case ('Power'):
                    return (<Power workoutType={this.props.workoutType} />);
                case ('Power Endurance'):
                        return (<PowerEndurance workoutType={this.props.workoutType} />);
                case ('Endurance'):
                    return (<Endurance workoutType={this.props.workoutType} />);
                case ('Performance'):
                        return (<Performance workoutType={this.props.workoutType} />);
                default:
                    return (<BaseFitness workoutType={this.props.workoutType} />);
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
                        value={this.props.workoutType}
                        onChange={(event) => this.props.updateWorkoutType(event)} id="select-type"
                        >
                            <MenuItem value="Base Fitness">Base Fitness</MenuItem>
                            <MenuItem value="Strength">Strength</MenuItem>
                            <MenuItem value="Power">Power</MenuItem>
                            <MenuItem value="Power Endurance">Power Endurance</MenuItem>
                            <MenuItem value="Endurance">Endurance</MenuItem>
                            <MenuItem value="Performance">Performance</MenuItem>
                    </Select>
                </FormControl>


                { workoutForm(this.props.workoutType) }
                <p>{ this.props.exercises[0] }</p>

                <Button style={{marginTop:'30px'}} variant="contained" color="primary" onClick={this.submitHandler} >Submit Workout</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        workoutType: state.workoutType,
        title: state.title,
        comments: state.comments,
        exercises: state.exercises,
        loading: state.loading       
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateWorkoutType: (event) => dispatch({type: 'UPDATE_WORKOUTTYPE', value: event.target.value })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewWorkout);