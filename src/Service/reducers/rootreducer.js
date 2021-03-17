import { combineReducers } from "redux"
import todoList from '../reducers/reducer'

const rootReducer = combineReducers({
    todoList,
})

export default rootReducer;