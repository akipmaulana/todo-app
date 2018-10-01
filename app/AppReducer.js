import { combineReducers } from 'redux-immutable';

import projectScreenReducer from './components/Cell/Project/reducer'

export default combineReducers({
    projectScreen: projectScreenReducer 
});