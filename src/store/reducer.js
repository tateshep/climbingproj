const initialState = {
    mobileNav: false,
    mobileModal: false,
}

const reducer = (state= initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_MOBILE_NAV':
            return {
                ...state,
                mobileNav: !state.mobileNav
            }
        case 'TOGGLE_MODAL':
            return { 
                ...state,
                mobileModal: !state.mobileModal
            }
    };

    return state;
}

export default reducer;