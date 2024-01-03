import { takeLatest } from "redux-saga/effects";
import { GET_ADMIN_PROCESS } from "../ACTIONS/admin_action";
import { get_admin_handler } from "../SAGA/admin_saga";

// GET - admin saga
export function* get_admin_presaga (){
    yield takeLatest(GET_ADMIN_PROCESS,get_admin_handler)
}