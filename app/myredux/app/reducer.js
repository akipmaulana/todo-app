import { fromJS } from 'immutable';
import { ActionType } from 'app/AppConstant';

const initialAppState = fromJS({
    request: {}
});

export default function appReducer(state = initialAppState, action) {
    switch (action.type) {
        case ActionType.ADD_PROJECT: 
            return state.setIn(['request', 'addProject'], true)
        case ActionType.UPDATE_PROJECT: 
            return state.setIn(['request', 'updateProject'], true)
        case ActionType.DELETE_PROJECT: 
            return state.setIn(['request', 'deleteProject'], true)
        case ActionType.CLOSE_PROJECT: 
            return state.setIn(['request', 'closeProject'], true)
        case ActionType.FETCH_PROJECT: 
            return state.setIn(['request', 'addProject'], false)
                        .setIn(['request', 'updateProject'], false)
                        .setIn(['request', 'deleteProject'], false)
                        .setIn(['request', 'closeProject'], false)
                        .setIn(['request', 'fetchProject'], true)
        case ActionType.FETCH_PROJECT_FULFILLED:
            return state.setIn(['request', 'fetchProject'], false)
        default:
            return state;
    }
}
