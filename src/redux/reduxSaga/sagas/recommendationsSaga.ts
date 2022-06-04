import { AxiosResponse } from 'axios';
import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import recommendationsAPI from '../../../api/recommendations.api';
import { RECOMMENDATIONS_FETCH_REQUEST } from '../../../constants/actionTypes';
import { recommendationsFetchFailure, recommendationsFetchSuccess } from '../../reducers/recommendationsReducer/recommendationsActions';
import { IRecommendationsFetchRequest } from '../../reducers/recommendationsReducer/types';

function* recommendationsFetchSaga({ payload }: IRecommendationsFetchRequest) {
    try {
        const response: AxiosResponse = yield call(
            recommendationsAPI.fetchAllUserRecommendations,
            payload.userId
        );
        yield put(recommendationsFetchSuccess(response.data))

    } catch (error) {
        yield put(recommendationsFetchFailure({ type: '', message: error.message }))
        return error
    }
}

function* recommendationsSaga(): Generator<StrictEffect> {
    yield takeLatest(RECOMMENDATIONS_FETCH_REQUEST, recommendationsFetchSaga);
}

export default recommendationsSaga;