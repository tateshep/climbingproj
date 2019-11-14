import React, { Component } from 'react';

import axios from '../../../axios-workouts';

class NewWorkout extends Component {

    state = {
        title: '',
        description: '',
        loading: false,
        
    }

    submitHandler = () => {
        let workout = {
           title: this.state.title,
           description: this.state.description
        }


        console.log(workout);    
        axios.post('/workouts.json', workout)
        .then(response => {
            // console.log(response);
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
        return (
            <>
                <form>
                    <fieldset>
                        <legend>New Workout</legend>

                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input onChange={(event) => this.titleChangedHandler(event)} id="title" type="text" placeholder='<span className="logo terminal-prompt"></span>"'/>
                        </div>
                    
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea onChange={(event) => this.descriptionChangedHandler(event)} style={{width: '100%',height: '40vh'}} id="description" type="textarea" placeholder="test description" />
                        </div>

                    </fieldset>
                </form>
                <button onClick={this.submitHandler} className="btn btn-default" >Submit</button>
            </>

        )
    }
}

export default NewWorkout;