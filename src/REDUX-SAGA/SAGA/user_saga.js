import { call, put } from "redux-saga/effects";
import { GET_USER_ERROR, GET_USER_SUCCESS } from "../ACTIONS/user";
import { get_user } from "../API/user_api";

export function* get_user_saga (action){
    try {
        const res = yield call(get_user,action)
        const data = res.data
        const status = res.status
        if(status === 200 || status === 201){
            yield put({type:GET_USER_SUCCESS,data})
        }
        else{
            yield put({type:GET_USER_ERROR})
        }
    } catch (error) {
        console.log("Error from user controller");
    }
}