import { ActionType } from 'app/AppConstant';

export const toogleProjectFormModal = (toogle, payload = {}) => ({
    type: ActionType.TOOGLE_PROJECT_FORM_MODAL,
    toogle,
    payload
});

export const fetchProjects = () => ({ type: ActionType.FETCH_PROJECT });

export const fetchProjectFulfilled = payload => ({
    type: ActionType.FETCH_PROJECT_FULFILLED,
    payload
});

export const addProject = (name) => ({ type: ActionType.ADD_PROJECT, name });

export const updateProject = (id, newName) => ({ type: ActionType.UPDATE_PROJECT, id, newName });

export const deleteProject = (id) => ({ type: ActionType.DELETE_PROJECT, id });

export const closeProject = (data) => ({ type: ActionType.CLOSE_PROJECT, data });