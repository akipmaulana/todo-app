import { ActionType } from 'app/AppConstant';

export const toogleTaskFormModal = (toogle, payload = {}) => ({
    type: ActionType.TOOGLE_PROJECT_FORM_MODAL,
    toogle,
    payload
});

export const fetchTasks = (page = 'page=1') => ({ type: ActionType.TASK_FETCH_REQUEST, page });

export const fetchTaskFulfilled = payload => ({
    type: ActionType.TASK_FETCH_SUCCESS,
    payload
});

export const addTask = (name) => ({ type: ActionType.TASK_ADD_REQUEST, name });

export const updateTask = (id, newName) => ({ type: ActionType.TASK_UPDATE_REQUEST, id, newName });

export const deleteTask = (id) => ({ type: ActionType.TASK_DELETE_REQUEST, id });

export const closeTask = (data) => ({ type: ActionType.TASK_CLOSE_REQUEST, data });

export const closeTaskDidSucceed = payload => ({ type: ActionType.TASK_CLOSE_SUCCESS, payload });