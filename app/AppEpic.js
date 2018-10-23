import { combineEpics } from 'redux-observable';

import { fetchProjectsEpic, addProjectsEpic, updateProjectsEpic } from 'myredux/action';

export default combineEpics(fetchProjectsEpic, addProjectsEpic, updateProjectsEpic);
