import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginRight: '10px',
      color: 'white',
      width: '300',
    },
  }));


 
  export default function BaseFitness(props) {
    const classes = useStyles();

    return (
        <>
            <h3>New {props.workoutType} Workout</h3>
            <form className={classes.container}>

                
                <div>
                        <TextField className={classes.textField} style={{color: 'white'}} onChange={(event) => props.titleChange(event)} id="title" type="text" placeholder='title'/>
                </div>
                        <div><TextField className={classes.textField} id="description" type="textarea" placeholder="test description" /></div>
                        <div><TextField className={classes.textField} multiline id="warmup" type="textarea" placeholder="test warm up" /></div>

            </form>
        </>
    )
  }
