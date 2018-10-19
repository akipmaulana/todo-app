import { fromJS } from 'immutable';
import { Constants } from 'config';

const initialState = fromJS({
  toogleVisible: false,
});

function toogleProjectFormReducer(state = initialState, action) {
  switch (action.type) {
      case Constants.TOOGLE_PROJECT_FORM:
          return state.set('toogleVisible', action.payload);
      default:
          return state;
  }
}

export default toogleProjectFormReducer