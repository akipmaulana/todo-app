import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from 'redux-immutable';
import { projectEpic, projectReducer, appReducer  } from 'myredux'

const rootReducer = combineReducers({
    app: appReducer,
    projectScreen: projectReducer,
});

const rootEpic = combineEpics(
    projectEpic.addEpic, 
    projectEpic.deleteEpic,
    projectEpic.fetchEpic, 
    projectEpic.updateEpic, 
);

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(rootReducer, 
    composeWithDevTools(
            applyMiddleware(logger, epicMiddleware)
        )
    );

export default store;
