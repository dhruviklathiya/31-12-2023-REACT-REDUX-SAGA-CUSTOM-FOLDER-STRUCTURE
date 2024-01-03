// Combine all in one
import { all } from "@redux-saga/core/effects";
import { delete_user_presaga, get_user_pre_saga, post_user_pre_saga, update_user_presaga } from "../PRE-SAGA/user_presaga";
import { get_admin_presaga } from "../PRE-SAGA/admin_presaga";


export function* rootSaga() {
  yield all([get_user_pre_saga(),get_admin_presaga(),post_user_pre_saga(),delete_user_presaga(),update_user_presaga()]);
}