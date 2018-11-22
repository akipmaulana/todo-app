import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from 'redux-immutable';
import { projectEpic, taskEpic, projectReducer, taskReducer, appReducer  } from 'myredux'

const rootReducer = combineReducers({
    app: appReducer,
    projectScreen: projectReducer,
    taskScreen: taskReducer,
});

const rootEpic = combineEpics(
    projectEpic.addEpic, 
    projectEpic.deleteEpic,
    projectEpic.fetchEpic, 
    projectEpic.updateEpic, 
    projectEpic.closeEpic,
    taskEpic.addEpic, 
    taskEpic.deleteEpic,
    taskEpic.fetchEpic, 
    taskEpic.updateEpic, 
    taskEpic.closeEpic,
);

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(rootReducer, 
    composeWithDevTools(
            applyMiddleware(logger, epicMiddleware)
        )
    );

export default store;
