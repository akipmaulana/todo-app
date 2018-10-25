import { ofType } from 'redux-observable';
import { Observable } from "rxjs";
import { mergeMap, switchMap, flatMap } from 'rxjs/operators';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ApiConstants } from 'api'
import { Constants } from 'config';
import { fetchProjectFulfilled, fetchProjects, toogleProjectFormModal, requestFailed } from './action'

export const fetchProjectsEpic = action$ =>
    action$.pipe(
        ofType(Constants.FETCH_PROJECT),
        mergeMap( action =>
            ajax({
                url: ApiConstants.PROJECT_URL + 'asd',
                method: 'GET',
                headers: {
                    'Authorization': ApiConstants.AUTH
                }
            }).flatMap(ajaxResponse => Observable.of(
                fetchProjectFulfilled(ajaxResponse.response)
            )).catch(error => Observable.of(
                requestFailed(error)
            ))
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
                    nme: action.name
                }
            }).flatMap(ajaxResponse => Observable.concat(
                Observable.of(fetchProjects())
            ))
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
            }).flatMap(ajaxResponse => Observable.concat(
                Observable.of(fetchProjects())
            ))
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
            }).flatMap(ajaxResponse => Observable.concat(
                Observable.of(fetchProjects())
            ))
        )
    );