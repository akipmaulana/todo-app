import { fromJS } from 'immutable';
import { ActionType } from 'app/AppConstant';

const initialAppState = fromJS({
    request: {}
});

export default function appReducer(state = initialAppState, action) {
    const { type } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILED)/.exec(type);
    
    // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
    if (!matches) return state;  
    
    const [, requestName, requestState] = matches;
    return state.setIn(['request', requestName], requestState == 'REQUEST')
}
