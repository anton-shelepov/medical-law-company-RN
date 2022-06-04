import { Action } from "redux";
import { ActionType } from "typesafe-actions";
import { RECOMMENDATION_DETAILS_FETCH_FAILURE, RECOMMENDATION_DETAILS_FETCH_REQUEST, RECOMMENDATION_DETAILS_FETCH_SUCCESS } from "../../../constants/actionTypes";
import { StateError } from "../../../types/errors";
import { RecommendationItem } from "../recommendationsReducer/types";
import * as actions from "./recommendationDetailsActions";

// RecommendationDetails reducer state

export interface IRecommendationDetailsState {
    data: {
        recommendationInfo: RecommendationItem,
        results: UserRecommendationResult[],
    },
    error: StateError,
    isLoading: boolean,
}

// RecommendationDetails reducer parts

export type UserRecommendationResult = {
    id: number,
    recommendationId: number,
    createdAt: Date,
    resultText: string,
}

// Actions

export interface IRecommendationDetailsFetchRequest extends Action {
    type: typeof RECOMMENDATION_DETAILS_FETCH_REQUEST,
    payload: { recommendationId: number },
}

export interface IRecommendationDetailsFetchSuccess extends Action {
    type: typeof RECOMMENDATION_DETAILS_FETCH_SUCCESS
    payload: {
        recommendationInfo: RecommendationItem,
        results: UserRecommendationResult[],
    }
}

export interface IRecommendationDetailsFetchFailure extends Action {
    type: typeof RECOMMENDATION_DETAILS_FETCH_FAILURE
    payload: StateError
}


// Combine actions type

export type RecommendationDetailsActions = ActionType<typeof actions>;
