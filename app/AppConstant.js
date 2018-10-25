const ApiConfig = {
    VERSION: 'v8',
    BASE_URL: 'https://beta.todoist.com/API/v8/',
}

export const ApiPath = {
    AUTH: 'Bearer 087e3744b380d3a751c46453e4d9265ba704b18c',
    PROJECT: ApiConfig.BASE_URL + 'projects'
}

export const ActionType = {
    ADD_PROJECT: 'ADD_PROJECT',
    DELETE_PROJECT: 'DELETE_PROJECT',
    FETCH_PROJECT_FULFILLED: 'FETCH_PROJECT_FULFILLED',
    FETCH_PROJECT: 'FETCH_PROJECT',
    REQUEST_FAILED: 'REQUEST_FAILED',
    TOOGLE_PROJECT_FORM_MODAL: 'TOOGLE_PROJECT_FORM_MODAL',
    UPDATE_PROJECT: 'UPDATE_PROJECT',
}

export const StateKey = {
    ADD_PROJECT: 'addProject',
    APP: 'app',
    DATA: 'data',
    DELETE_PROJECT: 'deleteProject',
    IS_LOAD_MORE: 'isLoadMore',
    IS_VISIBLE_MODAL: 'isVisibleModal',
    META: 'meta',
    PROJECT_SCREEN: 'projectScreen',
    PROJECT: 'project',
    REQUEST: 'request',
    SELECTED: 'selected',
    UPDATE_PROJECT: 'updateProject',
}