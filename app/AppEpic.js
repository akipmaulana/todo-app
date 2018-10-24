import { combineEpics } from 'redux-observable';

import { fetchProjectsEpic, addProjectsEpic, updateProjectsEpic, deleteProjectsEpic } from 'myredux/epic';

export default combineEpics(fetchProjectsEpic, addProjectsEpic, updateProjectsEpic, deleteProjectsEpic);
