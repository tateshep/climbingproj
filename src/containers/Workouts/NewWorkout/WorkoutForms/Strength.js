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
      margin: '10px',
      marginLeft: '0px',
      color: 'white',
      width: '300px',
    },
    exercise: {
        margin: '10px',
        color: 'white',
        width: '150px',
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
                    <p>HB Exercise {i}: </p>
                    <TextField className={classes.exercise} multiline id="" type="textarea" placeholder="Hold Description" />

                    <InputLabel style={{display:"inherit", margin: '10px'}} id={`set-select-${i}`} >Sets</InputLabel>
                    <Select value={selectSets} onChange={(event) => selectChangeHandler(event)} labelId={`set-select-${i}`}>
                        <MenuItem value="0">0</MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                    </Select>
                    <TextField className={classes.exercise} id="" type="textarea" placeholder="Comments" />
                </div>
        )
    };
    for (let i=1; i <= 6 ; i++ ) {
        sExercisesArray.push(
            <div key={`SE-${i}`}>
                    <p>Strength Exercise {i}: </p>
                    <TextField className={classes.exercise} multiline id="" type="textarea" placeholder="Exercise Description" />

                    <InputLabel style={{display:"inherit", margin: '10px'}} id={`set-select-${i}`} >Sets</InputLabel>
                    <Select value={selectSets} onChange={(event) => selectChangeHandler(event)} labelId={`set-select-${i}`}>
                        <MenuItem value="0">0</MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                    </Select>
                    <TextField className={classes.exercise} id="" type="textarea" placeholder="Comments" />
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
                <div><TextField className={classes.textField} onChange={(event) => props.titleChange(event)} id="title" type="text" placeholder='title' value={props.title}/></div>
                <div><TextField className={classes.textField} multiline id="warmup" type="textarea" placeholder="describe warm up" /></div>
                <div><TextField className={classes.textField} multiline id="comments" type="textarea" placeholder="comments" /></div>
                <h4>Hangboard Exercises</h4>
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
        description: state.description,
        exercises: state.exercises,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        titleChange: (event) => dispatch({type: 'UPDATE_TITLE', value: event.target.value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Strength);