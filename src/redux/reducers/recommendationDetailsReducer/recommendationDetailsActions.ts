import { RECOMMENDATION_DETAILS_FETCH_FAILURE, RECOMMENDATION_DETAILS_FETCH_REQUEST, RECOMMENDATION_DETAILS_FETCH_SUCCESS } from "../../../constants/actionTypes"
import { StateError } from "../../../types/errors"
import { RecommendationItem } from "../recommendationsReducer/types"
import { IRecommendationDetailsFetchFailure, IRecommendationDetailsFetchRequest, IRecommendationDetailsFetchSuccess } from "./types"

// FETCH RECOMMENDATION DETAILS DATA

export const recommendationDetailsFetchRequest =
    (recommendationId: number): IRecommendationDetailsFetchRequest => ({
        type: RECOMMENDATION_DETAILS_FETCH_REQUEST,
        payload: { recommendationId }
    })

export const recommendationDetailsFetchSuccess =
    (recommendationDetails: RecommendationItem): IRecommendationDetailsFetchSuccess => ({
        type: RECOMMENDATION_DETAILS_FETCH_SUCCESS,
        payload: recommendationDetails
    })

export const recommendationDetailsFetchFailure =
    (error: StateError): IRecommendationDetailsFetchFailure => ({
        type: RECOMMENDATION_DETAILS_FETCH_FAILURE,
        payload: error
    })

