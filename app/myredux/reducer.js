import { fromJS } from 'immutable';
import { ActionType } from 'app/AppConstant';

const initialProjectScreenState = fromJS({
    isVisibleModal: false,
    project: {
        selected: {},
        data: [],
        meta: {
            isLoadMore: false
        }
    }
});

export function projectScreenReducer(state = initialProjectScreenState, action) {
    switch (action.type) {
        case ActionType.TOOGLE_PROJECT_FORM_MODAL:
            return state.set('isVisibleModal', action.toogle)
                        .setIn(['project', 'selected'], action.payload)
        case ActionType.FETCH_PROJECT:
            return state.set('isVisibleModal', false)
                        .setIn(['project', 'meta', 'isLoadMore'], true);
        case ActionType.FETCH_PROJECT_FULFILLED:
            return state.setIn(['project', 'data'], action.payload)
                        .setIn(['project', 'meta', 'isLoadMore'], false);
        case ActionType.REQUEST_FAILED:
            return state.setIn(['project', 'failed'], action.error)
        default:
            return state;
    }
}

const initialAppState = fromJS({
    request: {}
});

export function appReducer(state = initialAppState, action) {
    switch (action.type) {
        case ActionType.ADD_PROJECT: 
            return state.setIn(['request', 'addProject'], true)
        case ActionType.UPDATE_PROJECT: 
            return state.setIn(['request', 'updateProject'], true)
        case ActionType.DELETE_PROJECT: 
            return state.setIn(['request', 'deleteProject'], true)
        case ActionType.FETCH_PROJECT: 
            return state.setIn(['request', 'addProject'], false)
                        .setIn(['request', 'updateProject'], false)
                        .setIn(['request', 'deleteProject'], false)
        default:
            return state;
    }
}
