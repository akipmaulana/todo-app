import { combineReducers } from 'redux-immutable';

import { projectReducer, appReducer  } from 'myredux'

export default combineReducers({
    projectScreen: projectReducer,
    app: appReducer,
});