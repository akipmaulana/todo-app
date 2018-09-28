import { combineReducers } from 'redux'
import formModalReducer from "./FormModalReducer"

export default combineReducers({
    formModal: formModalReducer
})