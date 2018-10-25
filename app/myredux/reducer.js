import { fromJS } from 'immutable';
import { Constants } from 'config';

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
        case Constants.TOOGLE_PROJECT_FORM_MODAL:
            return state.set('isVisibleModal', action.toogle)
                        .setIn(['project', 'selected'], action.payload)
        case Constants.FETCH_PROJECT:
            return state.set('isVisibleModal', false)
                        .setIn(['project', 'meta', 'isLoadMore'], true);
        case Constants.FETCH_PROJECT_FULFILLED:
            return state.setIn(['project', 'data'], action.payload)
                        .setIn(['project', 'meta', 'isLoadMore'], false);
        default:
            return state;
    }
}

const initialAppState = fromJS({
    request: {}
});

export function appReducer(state = initialAppState, action) {
    switch (action.type) {
        case Constants.ADD_PROJECT: 
            return state.setIn(['request', 'addProject'], true)
        case Constants.UPDATE_PROJECT: 
            return state.setIn(['request', 'updateProject'], true)
        case Constants.DELETE_PROJECT: 
            return state.setIn(['request', 'deleteProject'], true)
        case Constants.FETCH_PROJECT: 
            return state.setIn(['request', 'addProject'], false)
                        .setIn(['request', 'updateProject'], false)
                        .setIn(['request', 'deleteProject'], false)
        case Constants.TOOGLE_LOADING:
            return state.set('isRequesting', action.loading)
        default:
            return state;
    }
}
