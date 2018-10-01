import { combineEpics } from 'redux-observable';

import { fetchProjectsEpic } from './components/Cell/Project/action';

export default combineEpics(fetchProjectsEpic);
