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


    
    render () {
        const workoutsList = this.state.workouts.map(workout => {
            return (
                <Workout
                    key={workout.id}
                    title={workout.title}
                    description={workout.description}
                    />
            )
        })
        return (
            <div>
                { workoutsList }
            </div>
        )
    }
}

export default Workouts;