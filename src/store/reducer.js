const initialState = {

    title: '',
    comments: '',
    warmup: '',
    workoutType: 'Strength',
    exercises: ['hello'],
    loading: false,
}


const reducer = (state= initialState, action) => {
    switch(action.type) {
        case 'CHECK_STATE':
            console.log(state);
            break;
        case 'UPDATE_WORKOUTTYPE':
            return {
                ...state,
                workoutType: action.value
            }
        case 'UPDATE_TITLE':
            return {
                ...state,
                title: action.value
            }
        case 'UPDATE_WARMUP':
            return {
                ...state,
                warmup: action.value
            }
        case 'UPDATE_COMMENTS':
            return {
                ...state,
                comments: action.value
            }
        case 'ADD_HBEXERCISE':

            const newState = state;
            newState.exercises.push(action.value);

            return {
                ...state,
                exercises: newState.exercises
            }

    };
    return state;
}

export default reducer;