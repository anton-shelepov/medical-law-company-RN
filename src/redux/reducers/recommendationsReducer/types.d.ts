import { Action } from "redux";
import { ActionType } from "typesafe-actions";
import { RECOMMENDATIONS_FETCH_FAILURE, RECOMMENDATIONS_FETCH_REQUEST, RECOMMENDATIONS_FETCH_SUCCESS } from "../../../constants/actionTypes";
import { RecommendationGroups, RecommendationStatuses } from "../../../constants/enums";
import { StateError } from "../../../types/errors";
import * as actions from "./recommendationsActions";

// Recommendations reducer state

export interface IRecommendationsState {
    data: RecommendationItem[],
    error: StateError,
    isLoading: boolean
}

// Recommendations reducer parts

export type RecommendationItem = {
    id: number,
    group: RecommendationGroups,
    name: string,
    description: string,
    status: RecommendationStatuses,
    executionDate: string,
    receiverId: number,
}

// Actions

export interface IRecommendationsFetchRequest extends Action {
    type: typeof RECOMMENDATIONS_FETCH_REQUEST,
    payload: { userId: number },
}

export interface IRecommendationsFetchSuccess extends Action {
    type: typeof RECOMMENDATIONS_FETCH_SUCCESS
    payload: RecommendationItem[] | []
}

export interface IRecommendationsFetchFailure extends Action {
    type: typeof RECOMMENDATIONS_FETCH_FAILURE
    payload: StateError
}

// Common reducer types



// Combine actions type

export type RecommendationsActions = ActionType<typeof actions>;