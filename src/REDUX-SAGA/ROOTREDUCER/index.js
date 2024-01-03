import { combineReducers } from "redux";
import { user_reducer } from "../REDUCER/user_reducer"
import { admin_reducer } from "../REDUCER/admin_reducer"

const rootReducer = combineReducers({
    user_reducer,
    admin_reducer
})


export default rootReducer