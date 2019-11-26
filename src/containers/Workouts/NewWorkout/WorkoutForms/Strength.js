import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

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
    const [selectSets, setSelectSets] = React.useState(1);
    const handleDateChange = date => {
      setSelectedDate(date);
    };

    const selectChangeHandler = num => {
        setSelectSets(num.target.value);
    }

    const hbExercisesArray = [];
    const sExercisesArray = [];

    for (let i=1; i <= 10 ; i++ ) {
        hbExercisesArray.push(
            <div key={`SE-${i}`}>
                    <div>HB Exercise {i}: 

                    </div>

                    <TextField className={classes.exercise} multiline id="" type="textarea" label="Hold Description" />
                    <TextField className={classes.exercise} id="" type="textarea" label="Comments" />
                </div>
        )
    };
    for (let i=1; i <= 6 ; i++ ) {
        sExercisesArray.push(
            <div key={`SE-${i}`}>
                    <div>SE {i}: 
                     </div>
                    <TextField className={classes.exercise} multiline id="" type="textarea" label="Exercise Description" />
                    <TextField className={classes.exercise} id="" type="textarea" label="Comments" />
                </div>
        )
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
                <div>
                <h4>Hangboard Exercises</h4>
                    <InputLabel style={{display:"inline", margin: '150px'}} id={`set-select-1`} >Sets</InputLabel>
                    <Select value={selectSets} onChange={(event) => selectChangeHandler(event)} labelId={`set-select-1`}>
                        <MenuItem value="0">0</MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                </Select>
                </div>
              
                { hbExercisesArray }

                <h4>Supplemental Strength Exercises</h4>
                { sExercisesArray }
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Strength);