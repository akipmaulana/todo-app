import { Constants } from 'config';

export const toogleProjectFormModal = (toogle, payload = {}) => ({
    type: Constants.TOOGLE_PROJECT_FORM_MODAL,
    toogle,
    payload
});

export const toogleLoading = (loading) => ({ type: Constants.TOOGLE_LOADING, loading });

export const fetchProjects = () => ({ type: Constants.FETCH_PROJECT });

export const fetchProjectFulfilled = payload => ({
    type: Constants.FETCH_PROJECT_FULFILLED,
    payload
});

export const addProject = (name) => ({ type: Constants.ADD_PROJECT, name });

export const updateProject = (id, newName) => ({ type: Constants.UPDATE_PROJECT, id, newName });

export const deleteProject = (id) => ({ type: Constants.DELETE_PROJECT, id });