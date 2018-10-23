import { fromJS } from 'immutable';
import { Constants } from 'config';

const initialState = fromJS({
    isRequesting: false,
    isVisibleModal: false,
    selectedProject: {},
    projects: []
});

function projectReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.TOOGLE_PROJECT_FORM_MODAL:
            return state.set('isVisibleModal', action.toogle).set('selectedProject', action.payload)
        case Constants.FETCH_PROJECT:
            return state.set('isRequesting', true);
        case Constants.FETCH_PROJECT_FULFILLED:
            return state.set('projects', action.payload).set('isRequesting', false);
        default:
            return state;
    }
}

export default projectReducer;
