import { SCREEN_RESIZE } from '../actions/actionTypes'


const initialState = {
    screenWidth: typeof window === 'object' ? window.innerWidth : null
};

export default function UIReducer(state = initialState, action) {
    switch (action.type) {
        case SCREEN_RESIZE:
            return Object.assign({}, state, {
                screenWidth: action.screenWidth
            });
        default:
        return state;
    }
}