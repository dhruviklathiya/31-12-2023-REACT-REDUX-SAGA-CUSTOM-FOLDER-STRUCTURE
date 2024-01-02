// Combine all in one
import { all } from "@redux-saga/core/effects";
import { get_user_pre_saga } from "../PRE-SAGA/user_presaga";


export function* rootSaga() {
  yield all([get_user_pre_saga()]);
}