import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from 'axios';
import authAPI from '../../../api/auth.api';
import { ISigninRequest } from '../../reducers/userReducer/types';
import { LOGOUT_REQUEST, SIGNIN_REQUEST } from '../../../constants/actionTypes';
import { logoutFailure, logoutSuccess, signinFailure, signinSuccess } from "../../reducers/userReducer/userActions";
import { removeFromSecureStore, setInSecureStore } from "../../../utils/secureStore/secureStore";

function* userSigninRequestSaga({ payload }: ISigninRequest) {
    try {
        const response: AxiosResponse = yield call(authAPI.signin, payload);
        yield call(setInSecureStore, 'access_token', response.data.access_token);
        yield call(setInSecureStore, 'refresh_token', response.data.refresh_token);
        yield put(signinSuccess({
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
        }));

    } catch (error) {
        yield put(signinFailure(error));
    }
}

function* userLogoutRequestSaga() {
    try {
        yield call(authAPI.logout);
        yield call(removeFromSecureStore, 'access_token');
        yield call(removeFromSecureStore, 'refresh_token');
        yield put(logoutSuccess());

    } catch (error) {
        yield put(logoutFailure(error.message));
    }
}

function* authSaga(): Generator<StrictEffect> {
    yield takeLatest(SIGNIN_REQUEST, userSigninRequestSaga);
    yield takeLatest(LOGOUT_REQUEST, userLogoutRequestSaga);
}

export default authSaga;