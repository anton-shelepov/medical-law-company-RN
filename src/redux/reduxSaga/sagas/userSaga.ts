import { AxiosResponse } from 'axios';
import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import usersAPI from '../../../api/users.api';
import { CURRENT_USER_DATA_FETCH_REQUEST } from '../../../constants/actionTypes';
import { currentUserDataFetchFailure, currentUserDataFetchSuccess } from "../../reducers/userReducer/userActions";

function* currentUserDataFetchSaga() {
    console.log('here')
    try {
        const response: AxiosResponse = yield call(usersAPI.fetchCurrentUserData);
        yield put(currentUserDataFetchSuccess(response.data))

    } catch (error) {
        yield put(currentUserDataFetchFailure({ type: '', message: error.message }))
        return error
    }
}

function* userSaga(): Generator<StrictEffect> {
    yield takeLatest(CURRENT_USER_DATA_FETCH_REQUEST, currentUserDataFetchSaga);
}

export default userSaga;