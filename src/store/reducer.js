const initialState = {
    mobileNav: false,
    mobileModal: false,
    workoutType: 'Strength',
    title: '',
    comments: '',
    warmup: '',
    exercises: {},
    loading: false,
}


const reducer = (state= initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_MOBILE_NAV':
            return {
                ...state,
                mobileNav: !state.mobileNav
            }
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
    };
    return state;
}

export default reducer;