import { all, fork } from "redux-saga/effects";
import authSaga from "./sagas/authSaga";
import recommendationDetailsSaga from "./sagas/recommendationDetailsSaga";
import recommendationsSaga from "./sagas/recommendationsSaga";
import userSaga from "./sagas/userSaga";
import usersListSaga from "./sagas/usersListSaga";


export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(recommendationsSaga),
        fork(recommendationDetailsSaga),
        fork(usersListSaga),
        fork(userSaga),
    ]);
}