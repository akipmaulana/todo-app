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
            return state.setIn(['project', 'meta', 'isLoadMore'], true);
        case Constants.FETCH_PROJECT_FULFILLED:
            return state.setIn(['project', 'data'], action.payload)
                        .setIn(['project', 'meta', 'isLoadMore'], false);
        default:
            return state;
    }
}

const initialAppState = fromJS({
    isRequesting: false
});

export function appReducer(state = initialAppState, action) {
    switch (action.type) {
        case Constants.ADD_PROJECT: 
            return state.set('isRequesting', true)
        case Constants.FETCH_PROJECT: 
            return state.set('isRequesting', false)
        case Constants.TOOGLE_LOADING:
            return state.set('isRequesting', action.loading)
        default:
            return state;
    }
}
