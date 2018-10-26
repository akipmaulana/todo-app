import { ofType } from 'redux-observable';
import { Observable } from "rxjs";
import { mergeMap, switchMap, flatMap } from 'rxjs/operators';
import ApiClient from 'api'
import { ActionType } from 'app/AppConstant';
import { fetchProjectFulfilled, fetchProjects, toogleProjectFormModal, requestFailed } from './action'

export const fetchEpic = action$ =>
    action$.pipe(
        ofType(ActionType.PROJECT_FETCH_REQUEST),
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
        ofType(ActionType.PROJECT_ADD_REQUEST),
        mergeMap( action =>
            ApiClient.projects.add(action.name)
            .flatMap(ajaxResponse => Observable.concat(
                Observable.of(fetchProjects())
            ))
        )
    );

export const updateEpic = action$ =>
    action$.pipe(
        ofType(ActionType.PROJECT_UPDATE_REQUEST),
        mergeMap( action =>
            ApiClient.projects.update(action.id, action.newName)
            .flatMap(ajaxResponse => Observable.concat(
                Observable.of(fetchProjects())
            ))
        )
    );

export const deleteEpic = action$ =>
    action$.pipe(
        ofType(ActionType.PROJECT_DELETE_REQUEST),
        mergeMap( action =>
            ApiClient.projects.delete(action.id)
            .flatMap(ajaxResponse => Observable.concat(
                Observable.of(fetchProjects())
            ))
        )
    );

export const closeEpic = action$ =>
    action$.pipe(
        ofType(ActionType.PROJECT_CLOSE_REQUEST),
        mergeMap( action =>
            ApiClient.projects.close(action.data.id, action.data.isClosed)
            .flatMap(ajaxResponse => Observable.concat(
                Observable.of(fetchProjects())
            ))
        )
    );