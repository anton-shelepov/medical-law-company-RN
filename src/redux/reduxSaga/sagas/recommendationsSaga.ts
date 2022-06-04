import { AxiosResponse } from 'axios';
import { call, StrictEffect, takeLatest } from "redux-saga/effects";
import recommendationsAPI from '../../../api/recommendations.api';
import { RECOMMENDATIONS_FETCH_REQUEST } from '../../../constants/actionTypes';
import { IRecommendationsFetchRequest } from '../../reducers/recommendationsReducer/types';

function* recommendationsFetchSaga({ payload }: IRecommendationsFetchRequest) {
    try {
        const response: AxiosResponse = yield call(
            recommendationsAPI.fetchAllUserRecommendations,
            payload.userId
        );
        console.log(response)

    } catch (error) {
        // if (error.response.status === 204) {
        //     yield put(signinFailure({
        //         type: errorTypes.AUTH,
        //         message: "Неверный номер телефона или пароль"
        //     }));
        // }
        // return error
    }
}


function* recommendationsSaga(): Generator<StrictEffect> {
    yield takeLatest(RECOMMENDATIONS_FETCH_REQUEST, recommendationsFetchSaga);
}

export default recommendationsSaga;