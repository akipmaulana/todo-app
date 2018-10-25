import { ofType } from 'redux-observable';
import { Observable } from "rxjs";
import { mergeMap, switchMap, flatMap } from 'rxjs/operators';
import ApiClient from 'api'
import { ActionType } from 'app/AppConstant';
import { fetchProjectFulfilled, fetchProjects, toogleProjectFormModal, requestFailed } from './action'

export const fetchEpic = action$ =>
    action$.pipe(
        ofType(ActionType.FETCH_PROJECT),
        mergeMap( action =>
            ApiClient.projects.fetch()
            .flatMap(ajaxResponse => Observable.of(
                fetchProjectFulfilled(ajaxResponse.response)
            )).catch(error => Observable.of(
                requestFailed(error)
            ))
        )
    );

export const addEpic = action$ =>
    action$.pipe(
        ofType(ActionType.ADD_PROJECT),
        mergeMap( action =>
            ApiClient.projects.add(action.name)
            .flatMap(ajaxResponse => Observable.concat(
                Observable.of(fetchProjects())
            ))
        )
    );

export const updateEpic = action$ =>
    action$.pipe(
        ofType(ActionType.UPDATE_PROJECT),
        mergeMap( action =>
            ApiClient.projects.update(action.id, action.newName)
            .flatMap(ajaxResponse => Observable.concat(
                Observable.of(fetchProjects())
            ))
        )
    );

export const deleteEpic = action$ =>
    action$.pipe(
        ofType(ActionType.DELETE_PROJECT),
        mergeMap( action =>
            ApiClient.projects.delete(action.id)
            .flatMap(ajaxResponse => Observable.concat(
                Observable.of(fetchProjects())
            ))
        )
    );