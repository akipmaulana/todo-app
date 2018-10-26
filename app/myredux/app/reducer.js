import { fromJS } from 'immutable';
import { ActionType } from 'app/AppConstant';

const initialAppState = fromJS({
    request: {}
});

export default function appReducer(state = initialAppState, action) {
    switch (action.type) {
        case ActionType.PROJECT_ADD_REQUEST: 
            return state.setIn(['request', 'addProject'], true)
        case ActionType.PROJECT_UPDATE_REQUEST: 
            return state.setIn(['request', 'updateProject'], true)
        case ActionType.PROJECT_DELETE_REQUEST: 
            return state.setIn(['request', 'deleteProject'], true)
        case ActionType.PROJECT_CLOSE_REQUEST: 
            return state.setIn(['request', 'closeProject'], true)
        case ActionType.PROJECT_FETCH_REQUEST: 
            return state.setIn(['request', 'addProject'], false)
                        .setIn(['request', 'updateProject'], false)
                        .setIn(['request', 'deleteProject'], false)
                        .setIn(['request', 'closeProject'], false)
                        .setIn(['request', 'fetchProject'], true)
        case ActionType.PROJECT_FETCH_SUCCESS:
            return state.setIn(['request', 'fetchProject'], false)
        default:
            return state;
    }
}
