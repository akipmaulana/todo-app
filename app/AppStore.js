import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from "remote-redux-devtools";
import rootReducer from './AppReducer';
import rootEpic from './AppEpic';


const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, 
    composeWithDevTools(
            applyMiddleware(logger, epicMiddleware)
        )
    );

epicMiddleware.run(rootEpic);

export default store;
