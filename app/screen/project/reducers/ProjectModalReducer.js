import { combineReducers } from 'redux';

const INITIAL_STATE = {
  visible: false
};

const projectModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  projectModal: projectModalReducer,
});