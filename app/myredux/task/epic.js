import { ofType } from 'redux-observable';
import { Observable } from "rxjs";
import { mergeMap } from 'rxjs/operators';
import ApiClient from 'api'
import { ActionType } from 'app/AppConstant';
import { taskAction, appAction } from 'myredux'

export const fetchEpic = action$ =>
    action$.pipe(
        ofType(ActionType.TASK_FETCH_REQUEST),
        mergeMap( action =>
            ApiClient.tasks.fetch(action.page)
            .flatMap(ajaxResponse => Observable.of(
                taskAction.fetchTaskFulfilled(ajaxResponse.response)
            )).catch(error => Observable.of(
                appAction.requestFailed(error)
            ))
        )
    );

export const addEpic = action$ =>
    action$.pipe(
        ofType(ActionType.TASK_ADD_REQUEST),
        mergeMap( action =>
            ApiClient.tasks.add(action.name)
            .flatMap(ajaxResponse => Observable.concat(
                Observable.of(appAction.requestSuccess(ActionType.TASK_ADD_SUCCESS)),
                Observable.of(taskAction.fetchTasks())
            ))
        )
    );

export const updateEpic = action$ =>
    action$.pipe(
        ofType(ActionType.TASK_UPDATE_REQUEST),
        mergeMap( action =>
            ApiClient.tasks.update(action.id, action.newName)
            .flatMap(ajaxResponse => Observable.concat(
                Observable.of(appAction.requestSuccess(ActionType.TASK_UPDATE_SUCCESS)),
                Observable.of(taskAction.fetchTasks())
            ))
        )
    );

export const deleteEpic = action$ =>
    action$.pipe(
        ofType(ActionType.TASK_DELETE_REQUEST),
        mergeMap( action =>
            ApiClient.tasks.delete(action.id)
            .flatMap(ajaxResponse => Observable.concat(
                Observable.of(appAction.requestSuccess(ActionType.TASK_DELETE_SUCCESS)),
                Observable.of(taskAction.fetchTasks())
            ))
        )
    );

export const closeEpic = action$ =>
    action$.pipe(
        ofType(ActionType.TASK_CLOSE_REQUEST),
        mergeMap( action =>
            ApiClient.tasks.close(action.data.id, action.data.isClosed)
            .flatMap(ajaxResponse => Observable.concat(
                Observable.of(taskAction.closeTaskDidSucceed(ajaxResponse.response))
            ))
        )
    );