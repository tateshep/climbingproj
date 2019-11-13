import React, { Component } from 'react';

import Workout from '../../components/Workout/Workout';
import axios from '../../axios-workouts';

class Workouts extends Component {
    state = {
        workouts: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/workouts.json')
            .then(res => {
                const fetchedWorkouts = [];
                for (let key in res.data) {
                    fetchedWorkouts.push({
                        ...res.data[key],
                        id: key,
                    });
                }
                // console.log(fetchedWorkouts);

                this.setState({loading:false, workouts: fetchedWorkouts});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    deleteWorkoutHandler = (id) =>{
        axios.delete('/workouts/' + id + '.json')
            .then(res => {
                console.log(res);
            })
        console.log('delete :' + id);
    } 

    render () {
        const workoutsList = this.state.workouts.map(workout => {
            return (
                <Workout
                    key={workout.id}
                    title={workout.title}
                    description={workout.description}
                    delete = {() => this.deleteWorkoutHandler(workout.id)}
                    />
            )
        })
        return (
            <div style={{marginTop: "180px"}}>
                { workoutsList }
            </div>
        )
    }
}

export default Workouts;