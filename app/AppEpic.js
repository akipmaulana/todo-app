import { combineEpics } from 'redux-observable';

import { fetchProjectsEpic, addProjectsEpic } from 'myredux/action';

export default combineEpics(fetchProjectsEpic, addProjectsEpic);
