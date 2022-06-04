import { RECOMMENDATIONS_FETCH_FAILURE, RECOMMENDATIONS_FETCH_REQUEST, RECOMMENDATIONS_FETCH_SUCCESS } from "../../../constants/actionTypes"
import { StateError } from "../../../types/errors"
import { IRecommendationsFetchFailure, IRecommendationsFetchRequest, IRecommendationsFetchSuccess, RecommendationItem } from "./types"

// FETCH ALL RECOMMENDATIONS

export const recommendationsFetchRequest =
    (userId: number): IRecommendationsFetchRequest => ({
        type: RECOMMENDATIONS_FETCH_REQUEST,
        payload: { userId },
    })

export const recommendationsFetchSuccess =
    (recommendations: RecommendationItem[] | []): IRecommendationsFetchSuccess => ({
        type: RECOMMENDATIONS_FETCH_SUCCESS,
        payload: recommendations
    })

export const recommendationsFetchFailure =
    (error: StateError): IRecommendationsFetchFailure => ({
        type: RECOMMENDATIONS_FETCH_FAILURE,
        payload: error
    })

