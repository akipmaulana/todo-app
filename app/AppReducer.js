import { combineReducers } from 'redux-immutable';

import { projectScreenReducer, appReducer  } from 'myredux/reducer'

export default combineReducers({
    projectScreen: projectScreenReducer,
    app: appReducer,
});