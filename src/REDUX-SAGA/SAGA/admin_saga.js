import { call, put } from "redux-saga/effects";
import { get_admin } from "../API/admin_api";
import { GET_ADMIN_ERROR, GET_ADMIN_SUCCESS } from "../ACTIONS/admin_action";

export function* get_admin_handler () {
    try {
        const res = yield call(get_admin)
        const status = res.status
        const data = res.data
        if (status == 200 || status == 201) {
            yield put({type:GET_ADMIN_SUCCESS,data})
        } else {
            yield put({type: GET_ADMIN_ERROR})
        }
    } catch (error) {
        console.log(error);
    }
}