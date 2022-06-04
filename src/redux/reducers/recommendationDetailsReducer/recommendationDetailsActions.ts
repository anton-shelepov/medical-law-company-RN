import {
    RECOMMENDATION_DETAILS_FETCH_FAILURE,
    RECOMMENDATION_DETAILS_FETCH_REQUEST,
    RECOMMENDATION_DETAILS_FETCH_SUCCESS
} from "../../../constants/actionTypes"
import { StateError } from "../../../types/errors"
import {
    IRecommendationDetailsFetchFailure,
    IRecommendationDetailsFetchRequest,
    IRecommendationDetailsFetchSuccess,
    RecommendationDetailsFetchSuccessPayload
} from "./types"

// FETCH RECOMMENDATION DETAILS DATA

export const recommendationDetailsFetchRequest =
    (userId: number, recommendationId: number): IRecommendationDetailsFetchRequest => ({
        type: RECOMMENDATION_DETAILS_FETCH_REQUEST,
        payload: { userId, recommendationId }
    })

export const recommendationDetailsFetchSuccess =
    (payload: RecommendationDetailsFetchSuccessPayload): IRecommendationDetailsFetchSuccess => ({
        type: RECOMMENDATION_DETAILS_FETCH_SUCCESS,
        payload
    })

export const recommendationDetailsFetchFailure =
    (error: StateError): IRecommendationDetailsFetchFailure => ({
        type: RECOMMENDATION_DETAILS_FETCH_FAILURE,
        payload: error
    })

