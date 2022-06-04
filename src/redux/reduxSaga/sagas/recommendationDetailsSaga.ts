import { all, call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import recommendationDetailsAPI from '../../../api/recommendationDetails.api';
import { RECOMMENDATION_DETAILS_FETCH_REQUEST } from '../../../constants/actionTypes';
import { recommendationDetailsFetchFailure, recommendationDetailsFetchSuccess } from "../../reducers/recommendationDetailsReducer/recommendationDetailsActions";
import { IRecommendationDetailsFetchRequest, UserRecommendationResult } from '../../reducers/recommendationDetailsReducer/types';
import { RecommendationItem } from "../../reducers/recommendationsReducer/types";

function* recommendationDetailsFetch({ payload: { recommendationId, userId } }: IRecommendationDetailsFetchRequest) {
    try {
        const [recommendationInfo, results]: [RecommendationItem, UserRecommendationResult[]] = yield all([
            call(recommendationDetailsAPI.fetchRecommendationInfo, userId, recommendationId),
            call(recommendationDetailsAPI.fetchRecommendationResults, userId, recommendationId),
        ]);
        yield put(recommendationDetailsFetchSuccess({
            recommendationInfo,
            results
        }))

    } catch (error) {
        yield put(recommendationDetailsFetchFailure({ type: 'unknown', message: error.message }))
    }
}

function* recommendationDetailsSaga(): Generator<StrictEffect> {
    yield takeLatest(RECOMMENDATION_DETAILS_FETCH_REQUEST, recommendationDetailsFetch);
}

export default recommendationDetailsSaga;