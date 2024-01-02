import { combineReducers } from "redux";
import { user_reducer } from "../REDUCER/user_reducer"

const rootReducer = combineReducers({
    user_reducer,
})


export default rootReducer