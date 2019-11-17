import React, { Component } from 'react';

import axios from '../../../axios-workouts';

const style = {
    root: 
    {
    marginTop: '20vh',
    marginLeft: '5%',
    marginRight: '5%'
    },
}

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
            <div style={style.root}>
                <form>
                    <fieldset>
                        <legend>New Workout</legend>

                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input onChange={(event) => this.titleChangedHandler(event)} id="title" type="text" placeholder='title'/>
                        </div>
                    
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea onChange={(event) => this.descriptionChangedHandler(event)} style={{width: '100%',height: '40vh'}} id="description" type="textarea" placeholder="test description" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="warmup">Warm up</label>
                            <textarea onChange={(event) => this.descriptionChangedHandler(event)} style={{width: '100%',height: '10vh'}} id="warmup" type="textarea" placeholder="test warm up" />
                        </div>

                    </fieldset>
                </form>
                <button onClick={this.submitHandler} className="btn btn-default" >Submit</button>
            </div>

        )
    }
}

export default NewWorkout;