import { all, fork } from "redux-saga/effects";
import authSaga from "./sagas/authSaga";
import recommendationsSaga from "./sagas/recommendationsSaga";


export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(recommendationsSaga),
    ]);
}