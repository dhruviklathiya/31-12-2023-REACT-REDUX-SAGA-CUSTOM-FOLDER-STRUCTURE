import { takeLatest } from "@redux-saga/core/effects";
import { delete_user_saga, get_user_saga, post_user_saga, update_user_saga } from "../SAGA/user_saga";
import { DELETE_USER_PROCESS, GET_USER_PROCESS, POST_USER_PROCESS, UPDATE_USER_PROCESS } from "../ACTIONS/user_action";

// GET - user saga
export function* get_user_pre_saga() {
  yield takeLatest(GET_USER_PROCESS, get_user_saga);
}

// POST - user saga
export function* post_user_pre_saga() {
  yield takeLatest(POST_USER_PROCESS, post_user_saga);
}

// DELETE - user saga
export function* delete_user_presaga (){
    yield takeLatest(DELETE_USER_PROCESS,delete_user_saga)
}

// UPDATE - user saga
export function* update_user_presaga (){
    yield takeLatest(UPDATE_USER_PROCESS,update_user_saga)
}