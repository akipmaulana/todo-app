import { combineEpics } from 'redux-observable';

import { projectEpic } from 'myredux';

export default combineEpics(
    projectEpic.fetchEpic, 
    projectEpic.addEpic, 
    projectEpic.updateEpic, 
    projectEpic.deleteEpic,
);
