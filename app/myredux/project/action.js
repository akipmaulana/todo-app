import { ActionType } from 'app/AppConstant';

export const toogleProjectFormModal = (toogle, payload = {}) => ({
    type: ActionType.TOOGLE_PROJECT_FORM_MODAL,
    toogle,
    payload
});

export const fetchProjects = (page = 'page=1') => ({ type: ActionType.PROJECT_FETCH_REQUEST, page });

export const fetchProjectFulfilled = payload => ({
    type: ActionType.PROJECT_FETCH_SUCCESS,
    payload
});

export const addProject = (name) => ({ type: ActionType.PROJECT_ADD_REQUEST, name });

export const updateProject = (id, newName) => ({ type: ActionType.PROJECT_UPDATE_REQUEST, id, newName });

export const deleteProject = (id) => ({ type: ActionType.PROJECT_DELETE_REQUEST, id });

export const closeProject = (data) => ({ type: ActionType.PROJECT_CLOSE_REQUEST, data });

export const closeProjectDidSucceed = payload => ({ type: ActionType.PROJECT_CLOSE_SUCCESS, payload });