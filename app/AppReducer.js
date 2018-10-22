import { combineReducers } from 'redux-immutable';

import projectReducer from 'myredux/reducer'

export default combineReducers({
    projectScreen: projectReducer
});