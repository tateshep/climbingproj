import React from 'react';
import TextField from '@material-ui/core/TextField';
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
      marginRight: '10px',
      color: 'white',
      width: '300',
    },
  }));

 
  export default function Strength(props) {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));

    const handleDateChange = date => {
      setSelectedDate(date);
    };

    return (
        <>
            <h3>New {props.workoutType} Workout</h3>
            <form className={classes.container}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
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
                <div><TextField className={classes.textField} onChange={(event) => props.titleChange(event)} id="title" type="text" placeholder='title'/></div>
                <div><TextField className={classes.textField} multiline id="warmup" type="textarea" placeholder="test warm up" /></div>
                <div><TextField className={classes.textField} multiline id="comments" type="textarea" placeholder="test comments" /></div>

            </form>
        </>
    )
  }
