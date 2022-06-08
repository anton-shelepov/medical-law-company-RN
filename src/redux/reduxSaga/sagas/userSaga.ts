import { AxiosResponse } from 'axios';
import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import authAPI from '../../../api/auth.api';
import { SIGNIN_REQUEST } from '../../../constants/actionTypes';
import { errorTypes, TokenTypes } from "../../../constants/enums";
import { setInSecureStore } from "../../../utils/secureStore/secureStore";
import { ISigninRequest } from '../../reducers/userReducer/types';
import { signinFailure, signinSuccess } from "../../reducers/userReducer/userActions";

function* userSigninRequestSaga({ payload }: ISigninRequest) {
    try {
        const response: AxiosResponse = yield call(authAPI.signin, payload);
        yield call(setInSecureStore, TokenTypes.accessToken, response.data.access_token);
        yield call(setInSecureStore, TokenTypes.refreshToken, response.data.refresh_token);
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

function* userSaga(): Generator<StrictEffect> {
    yield takeLatest(SIGNIN_REQUEST, userSigninRequestSaga);
}

export default userSaga;