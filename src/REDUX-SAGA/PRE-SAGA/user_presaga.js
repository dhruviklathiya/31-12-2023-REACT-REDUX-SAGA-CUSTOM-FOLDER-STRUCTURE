import { takeLatest } from "@redux-saga/core/effects";
import { get_user_saga } from "../SAGA/user_saga";
import { GET_USER_PROCESS } from "../ACTIONS/user";


// GET - product saga
export function* get_user_pre_saga() {
  yield takeLatest(GET_USER_PROCESS, get_user_saga);
}