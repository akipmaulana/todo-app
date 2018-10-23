import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ApiConstants } from 'api'
import { Constants } from 'config';

export const toogleProjectFormModal = toogle => ({
    type: Constants.TOOGLE_PROJECT_FORM_MODAL,
    toogle
});

export const fetchProjects = () => ({ type: Constants.FETCH_PROJECT });

export const fetchProjectFulfilled = payload => ({
    type: Constants.FETCH_PROJECT_FULFILLED,
    payload
});

export const addProject = (payload) => ({ type: Constants.ADD_PROJECT, payload });

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
                    'X-Request-Id': 'C1A32AED82B2AED1'
                },
                body: {
                    name: "This Is Spartan"
                }
            }).map(ajaxResponse => fetchProjects())
        )
    );

