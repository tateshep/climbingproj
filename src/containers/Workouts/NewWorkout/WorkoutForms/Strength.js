import React from 'react';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

import HbExercise from '../../../../components/Exercises/HbExercise';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'no-wrap',
      flexDirection: 'column'
    },
    textField: {
      margin: '20px',
      marginLeft: '0px',
      color: 'white',
      width: '90%',
    },
    exercise: {
        margin: '20px',
        color: 'white',
        width: '90%',
      },
  }));

 
const Strength = (props) => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));

    const handleDateChange = date => {
      setSelectedDate(date);
    };



    return (
        <>
            {/* Strength workouts consist of
                - Warmup
                - Hangboard exercises
                    amount of weight taken away or added in lbs
                    10 sets of exercises
                    up to 3 sets for each set
                - Supplemental Strength Exercises
                    up to 6 exercises
                    3 - 4 sets each
                    4 - 10 reps ea set
                 */}
            <h3>New {props.workoutType} Workout</h3>
            <form className={classes.container}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                style={{width:'200px'}}

                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
                </MuiPickersUtilsProvider>
                
                <div><TextField className={classes.textField} onChange={(event) => props.titleChange(event)} id="title" type="text" label='Title' value={props.title}/></div>
                <div><TextField className={classes.textField} multiline onChange={(event) => props.warmupChange(event)} id="title" type="text" label='Title' value={props.warmup} id="warmup" type="textarea" label="Describe Warm Up" /></div>
                <div><TextField className={classes.textField} multiline onChange={(event) => props.commentsChange(event)} id="comments" type="textarea" label="Comments" /></div>
                
                <HbExercise />

            </form>
        </>
    )
  }

  const mapStateToProps = (state) => {
    return {
        title: state.title,
        comments: state.comments,
        exercises: state.exercises,
        warmup: state.warmup
    }
}

const mapDispatchToProps = dispatch => {
    return {
        titleChange: (event) => dispatch({type: 'UPDATE_TITLE', value: event.target.value}),
        warmupChange: (event) => dispatch({type: 'UPDATE_WARMUP', value: event.target.value}),
        commentsChange: (event) => dispatch({type: 'UPDATE_COMMENTS', value: event.target.value}),
        exerciseChange: (exercise) => dispatch({type: 'UPDATE_EXERCISE', value: exercise}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Strength);