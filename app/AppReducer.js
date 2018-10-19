import { combineReducers } from 'redux-immutable';

import projectReducer from './components/Cell/Project/reducer'
import toogleProjectFormReducer from "./screen/project/reducer";

export default combineReducers({
    projectScreen: projectReducer,
    projectScreenToogleForm: toogleProjectFormReducer
});