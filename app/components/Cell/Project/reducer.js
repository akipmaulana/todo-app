import { fromJS } from 'immutable';
import { FETCH_PROJECT, FETCH_PROJECT_FULFILLED } from './types';

const initialState = fromJS({
    isPinging: false,
    projects: []
});

function pingReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PROJECT_FULFILLED:
            return state.set('projects', action.payload);

        default:
            return state;
    }
}

export default pingReducer;
