import { fromJS, Map, hasIn, List } from 'immutable';
import { ActionType } from 'app/AppConstant';
import { ReduxHelper } from "helper";

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
        case ActionType.PROJECT_FETCH_REQUEST:
            return state.set('isVisibleModal', false)
        case ActionType.PROJECT_FETCH_SUCCESS:
            let project = state.get('project')
            let payload = Map(action.payload)
            if (state.getIn(['project', 'data']) || false) {
                let oldData = project.get('data')
                let newData = ReduxHelper.concatNoRedundant(oldData, payload.get('data'))
                return state.setIn(['project', 'data'], newData)
                            .setIn(['project', 'meta'], payload.get('meta'))
            }
            return state.set('project', project.merge(payload))
        case ActionType.PROJECT_CLOSE_SUCCESS:
            let list = state.getIn(['project', 'data'])
            list.forEach((element, index) => {
                if(element.id === action.payload.id) {
                    list[index] = action.payload
                }
            });
            return state.setIn(['project', 'data'], list)
        default:
            return state;
    }
}