import { VisibilityFormModal } from '../actions'

export default formModalReducer = (state = VisibilityFormModal.HIDE, action) => {
  switch (action.type) {
    case VisibilityFormModal.SHOW: 
      return action.visibility
    default:
      return state
  }
};