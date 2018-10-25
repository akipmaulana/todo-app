import { ofType } from 'redux-observable';
import { Observable } from "rxjs";
import { mergeMap, switchMap, flatMap } from 'rxjs/operators';
import ApiClient from 'api'
import { Constants } from 'config';
import { fetchProjectFulfilled, fetchProjects, toogleProjectFormModal, requestFailed } from './action'

export const fetchProjectsEpic = action$ =>
    action$.pipe(
        ofType(Constants.FETCH_PROJECT),
        mergeMap( action =>
            ApiClient.projects.fetch()
            .flatMap(ajaxResponse => Observable.of(
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
            ApiClient.projects.add(action.name)
            .flatMap(ajaxResponse => Observable.concat(
                Observable.of(fetchProjects())
            ))
        )
    );

export const updateProjectsEpic = action$ =>
    action$.pipe(
        ofType(Constants.UPDATE_PROJECT),
        mergeMap( action =>
            ApiClient.projects.update(action.id, action.newName)
            .flatMap(ajaxResponse => Observable.concat(
                Observable.of(fetchProjects())
            ))
        )
    );

export const deleteProjectsEpic = action$ =>
    action$.pipe(
        ofType(Constants.DELETE_PROJECT),
        mergeMap( action =>
            ApiClient.projects.delete(action.id)
            .flatMap(ajaxResponse => Observable.concat(
                Observable.of(fetchProjects())
            ))
        )
    );