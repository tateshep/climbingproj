import React from 'react';
import { connect } from 'react-redux';

const CheckState = (props) => {
    return (
        <button onClick={props.checkState}>check state</button>
    )
}

const mapStateToProps = (state) => {
    return {
        workoutType: state.workoutType,
        title: state.title,
        description: state.description,
        exercises: state.exercises,
        loading: state.loading       
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkState: () => dispatch({type: 'CHECK_STATE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckState);