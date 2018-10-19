import { ofType } from 'redux-observable';
import { delay, mapTo, mergeMap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ApiConstants } from 'api'
import { Constants } from 'config';

export const fetchProjects = () => ({ type: Constants.FETCH_PROJECT });

export const fetchProjectFulfilled = payload => ({
    type: Constants.FETCH_PROJECT_FULFILLED,
    payload
});

export const fetchProjectsEpic = action$ =>
    action$.pipe(
        ofType(Constants.FETCH_PROJECT),
        mergeMap(action =>
            ajax({
                url: ApiConstants.PROJECT_URL,
                method: 'GET',
                headers: {
                    'Authorization': ApiConstants.AUTH
                }
            }).map(ajaxResponse => fetchProjectFulfilled(ajaxResponse.response))
        )
    );
