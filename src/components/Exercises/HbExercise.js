import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

class HbExercise extends Component {
    state = {
        selectSets: '1',
        description: '',
        comments: ''
    }

    // [selectSets, setSelectSets] = React.useState(1);

    selectChangeHandler = num => {
        this.setState({selectSets:num.target.value});
    }

    descriptionChangedHandler = (event) => {
        let newDescription = event.target.value;
        this.setState({description: newDescription});
    }

    commentsChangedHandler = (event) => {
        let newComments = event.target.value;
        this.setState({comments: newComments});
    }

    addExerciseHandler = () => {
        console.log('');
    }
    
    render () {

        return (
            <div>
                <h3>Add HB Exercise </h3>
                <div>
                    <InputLabel  id={`set-select-1`} >Sets</InputLabel>
                            <Select value={this.state.selectSets} onChange={(event) => this.selectChangeHandler(event)} labelId={`set-select-1`}>
                                <MenuItem value="0">0</MenuItem>
                                <MenuItem value="1">1</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                        </Select>
                </div>
    
                <TextField onChange={(event) => this.descriptionChangedHandler(event)} multiline id="" type="textarea" label="Hold Description" />
                <TextField onChange={(event) => this.commentsChangedHandler(event)} multiline id="" type="textarea" label="Comments" />
                <Button onClick={() => this.props.addExercise(this.state)}  variant="contained" color="primary">Add</Button>
            </div>
        )
    }
};


const mapStateToProps = (state) => {
    return {
        exercises: state.exercises,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addExercise: (exercise) => dispatch({type: 'ADD_HBEXERCISE', value: exercise })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HbExercise);