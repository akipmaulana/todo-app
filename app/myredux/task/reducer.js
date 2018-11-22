import { fromJS, Map } from 'immutable';
import { ActionType } from 'app/AppConstant';
import { ReduxHelper } from "helper";

const initialTaskScreenState = fromJS({
    isVisibleModal: false,
    task: {
        selected: {}
    }
});

export default function taskScreenReducer(state = initialTaskScreenState, action) {
    switch (action.type) {
        case ActionType.TOOGLE_TASK_FORM_MODAL:
            return state.set('isVisibleModal', action.toogle)
                        .setIn(['task', 'selected'], action.payload)
        case ActionType.TASK_FETCH_REQUEST:
            return state.set('isVisibleModal', false)
        case ActionType.TASK_FETCH_SUCCESS:
            let task = state.get('task')
            let payload = Map(action.payload)
            if (state.getIn(['task', 'data']) || false) {
                let oldData = task.get('data')
                let newData = ReduxHelper.concatNoRedundant(oldData, payload.get('data'))
                return state.setIn(['task', 'data'], newData)
                            .setIn(['task', 'meta'], payload.get('meta'))
            }
            return state.set('task', task.merge(payload))
        case ActionType.TASK_CLOSE_SUCCESS:
            let list = state.getIn(['task', 'data'])
            list.forEach((element, index) => {
                if(element.id === action.payload.id) {
                    list[index] = action.payload
                }
            });
            return state.setIn(['task', 'data'], list)
        default:
            return state;
    }
}