const initialState = {
    mobileNav: false,
    mobileModal: false,
    workoutType: 'Strength',
    title: '',
    description: '',
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
    };
    return state;
}

export default reducer;