import { combineEpics } from 'redux-observable';

import { fetchProjectsEpic } from 'myredux/action';

export default combineEpics(fetchProjectsEpic);
