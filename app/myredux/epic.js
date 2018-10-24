import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ApiConstants } from 'api'
import { Constants } from 'config';
import { fetchProjectFulfilled, fetchProjects } from './action'

export const fetchProjectsEpic = action$ =>
    action$.pipe(
        ofType(Constants.FETCH_PROJECT),
        mergeMap( action =>
            ajax({
                url: ApiConstants.PROJECT_URL,
                method: 'GET',
                headers: {
                    'Authorization': ApiConstants.AUTH
                }
            }).map(ajaxResponse => fetchProjectFulfilled(ajaxResponse.response))
        )
    );

export const addProjectsEpic = action$ =>
    action$.pipe(
        ofType(Constants.ADD_PROJECT),
        mergeMap( action =>
            ajax({
                url: ApiConstants.PROJECT_URL,
                method: 'POST',
                headers: {
                    'Authorization': ApiConstants.AUTH,
                    //'X-Request-Id': 'C1A32AED82B2AED1'
                },
                body: {
                    name: action.name
                }
            }).map(ajaxResponse => fetchProjects())
        )
    );

export const updateProjectsEpic = action$ =>
    action$.pipe(
        ofType(Constants.UPDATE_PROJECT),
        mergeMap( action =>
            ajax({
                url: `${ApiConstants.PROJECT_URL}/${action.id}`,
                method: 'POST',
                headers: {
                    'Authorization': ApiConstants.AUTH,
                    'Content-Type': 'application/json',
                    //'X-Request-Id': 'C1A32AED82B2AED1'
                },
                body: {
                    name: action.newName
                }
            }).map(ajaxResponse => fetchProjects())
        )
    );

export const deleteProjectsEpic = action$ =>
    action$.pipe(
        ofType(Constants.DELETE_PROJECT),
        mergeMap( action =>
            ajax({
                url: `${ApiConstants.PROJECT_URL}/${action.id}`,
                method: 'DELETE',
                headers: {
                    'Authorization': ApiConstants.AUTH,
                    //'X-Request-Id': 'C1A32AED82B2AED1'
                }
            }).map(ajaxResponse => fetchProjects())
        )
    );