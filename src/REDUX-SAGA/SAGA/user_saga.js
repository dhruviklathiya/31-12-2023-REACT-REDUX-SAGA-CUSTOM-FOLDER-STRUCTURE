import { call, put } from "redux-saga/effects";
import { DELETE_USER_ERROR, DELETE_USER_SUCCESS, GET_USER_ERROR, GET_USER_SUCCESS, POST_USER_ERROR, POST_USER_SUCCESS } from "../ACTIONS/user_action";
import { delete_user, get_user, post_user } from "../API/user_api";

export function* get_user_saga (){
    try {
        const res = yield call(get_user)
        const data = res.data
        const status = res.status
        if(status === 200 || status === 201){
            yield put({type:GET_USER_SUCCESS,data})
        }
        else{
            yield put({type:GET_USER_ERROR})
        }
    } catch (error) {
        console.log("Error from user controller get function");
    }
}

export function* post_user_saga (action){
    try {
        const res = yield call(post_user,action)
        const data = res.data
        const status = res.status
        if(status === 200 || status === 201){
            yield put({type:POST_USER_SUCCESS,data})
        }
        else{
            yield put({type:POST_USER_ERROR})
        }
    } catch (error) {
        console.log("Error from user controller post function");
    }
}

export function* delete_user_saga (action){
    try {
        const res = yield call(delete_user,action)
        const status = res.status
        if (status == 200 || status == 201) {
            yield put({type:DELETE_USER_SUCCESS,action})
        } else {
            yield put({type:DELETE_USER_ERROR})
        }
    } catch (error) {
        console.log("Error from user controller -- delete user function");
    }
}