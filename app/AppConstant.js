const Env = {
    DEV: 'https://todo-node-express.herokuapp.com/api/v1/',
    TODOLIST: 'https://beta.todoist.com/API/v8/'
}

const ApiConfig = {
    BASE_URL: Env.DEV,
}

export const ApiPath = {
    AUTH: 'Bearer 087e3744b380d3a751c46453e4d9265ba704b18c',
    PROJECT: ApiConfig.BASE_URL + 'projects',
    TASK: ApiConfig.BASE_URL + 'tasks'
}

export const ActionType = {
    PROJECT_ADD_FAILED: 'PROJECT_ADD_FAILED',
    PROJECT_ADD_REQUEST: 'PROJECT_ADD_REQUEST',
    PROJECT_ADD_SUCCESS: 'PROJECT_ADD_SUCCESS',
    PROJECT_CLOSE_FAILED: 'PROJECT_CLOSE_FAILED',
    PROJECT_CLOSE_REQUEST: 'PROJECT_CLOSE_REQUEST',
    PROJECT_CLOSE_SUCCESS: 'PROJECT_CLOSE_SUCCESS',
    PROJECT_DELETE_FAILED: 'PROJECT_DELETE_FAILED',
    PROJECT_DELETE_REQUEST: 'PROJECT_DELETE_REQUEST',
    PROJECT_DELETE_SUCCESS: 'PROJECT_DELETE_SUCCESS',
    PROJECT_FETCH_FAILED: 'PROJECT_FETCH_FAILED',
    PROJECT_FETCH_REQUEST: 'PROJECT_FETCH_REQUEST',
    PROJECT_FETCH_SUCCESS: 'PROJECT_FETCH_SUCCESS',
    PROJECT_UPDATE_FAILED: 'PROJECT_UPDATE_FAILED',
    PROJECT_UPDATE_REQUEST: 'PROJECT_UPDATE_REQUEST',
    PROJECT_UPDATE_SUCCESS: 'PROJECT_UPDATE_SUCCESS',
    TOOGLE_PROJECT_FORM_MODAL: 'TOOGLE_PROJECT_FORM_MODAL',
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

export const ScreenName = {
    PROJECT: "Project",
    HISTORY: "History",
    FAVORITE: "Favorite",
    COMPLETE: "Complete",
    TASK: "Task"
}