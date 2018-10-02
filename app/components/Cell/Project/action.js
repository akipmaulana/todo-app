import { ofType } from 'redux-observable';
import { delay, mapTo, mergeMap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ApiConstants } from 'api'

import { FETCH_PROJECT, FETCH_PROJECT_FULFILLED } from './types';

export const fetchProjects = () => ({ type: FETCH_PROJECT });

export const fetchProjectFulfilled = payload => ({
    type: FETCH_PROJECT_FULFILLED,
    payload
});

export const fetchProjectsEpic = action$ =>
    action$.pipe(
        ofType(FETCH_PROJECT),
        mergeMap(action =>
            ajax
                .getJSON(ApiConstants.PROJECT_URL)
                .map(response => fetchProjectFulfilled(response))
        )
    );
