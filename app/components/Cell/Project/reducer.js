import { fromJS } from 'immutable';
import { Constants } from 'config';

const initialState = fromJS({
    isPinging: false,
    projects: []
});

function projectReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.FETCH_PROJECT_FULFILLED:
            return state.set('projects', action.payload);

        default:
            return state;
    }
}

export default projectReducer;
