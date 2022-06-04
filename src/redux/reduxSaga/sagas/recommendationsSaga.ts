import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { AxiosError, AxiosResponse } from 'axios';
import authAPI from '../../../api/auth.api';
import { ISigninRequest } from '../../reducers/userReducer/types';
import { LOGOUT_REQUEST, RECOMMENDATIONS_FETCH_REQUEST, SIGNIN_REQUEST } from '../../../constants/actionTypes';
import { logoutFailure, logoutSuccess, signinFailure, signinSuccess } from "../../reducers/userReducer/userActions";
import { removeFromSecureStore, setInSecureStore } from "../../../utils/secureStore/secureStore";
import { errorTypes } from "../../../constants/enums";

function* recommendationsFetchSaga({ payload }: ISigninRequest) {
    try {
        const response: AxiosResponse = yield call(authAPI.signin, payload);
        yield call(setInSecureStore, 'access_token', response.data.access_token);
        yield call(setInSecureStore, 'refresh_token', response.data.refresh_token);
        yield put(signinSuccess({
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
        }));

    } catch (error) {
        if (error.response.status === 403) {
            yield put(signinFailure({
                type: errorTypes.AUTH,
                message: "Неверный номер телефона или пароль"
            }));
        }
        return error
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

function* recommendationsSaga(): Generator<StrictEffect> {
    yield takeLatest(RECOMMENDATIONS_FETCH_REQUEST, recommendationsFetchSaga);
    yield takeLatest(LOGOUT_REQUEST, userLogoutRequestSaga);
}

export default recommendationsSaga;