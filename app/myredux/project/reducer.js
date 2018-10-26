import { fromJS, Map } from 'immutable';
import { ActionType } from 'app/AppConstant';

const initialProjectScreenState = fromJS({
    isVisibleModal: false,
    project: {
        selected: {}
    }
});

export default function projectScreenReducer(state = initialProjectScreenState, action) {
    switch (action.type) {
        case ActionType.TOOGLE_PROJECT_FORM_MODAL:
            return state.set('isVisibleModal', action.toogle)
                        .setIn(['project', 'selected'], action.payload)
        case ActionType.FETCH_PROJECT:
            return state.set('isVisibleModal', false)
        case ActionType.FETCH_PROJECT_FULFILLED:
            let project = state.get('project')
            let payload = Map(action.payload)
            return state.set('project', project.merge(payload))
        case ActionType.REQUEST_FAILED:
            return state.setIn(['project', 'failed'], action.error)
        default:
            return state;
    }
}