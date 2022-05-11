import {Action} from "redux";
import {ActionType} from "typesafe-actions";
import * as actions from "./recommendationsActions";

// Root reducer state

export interface IRecommendationsState {
    recommendations: RecommendationsItem[],
}

// Root reducer parts

export type RecommendationsItem = {
    id: number,
    title: string,
    status: RecommendationStatuses,
    executionTime: string,
    recommendationText: string,
    employeePosition: string,
}

export enum RecommendationStatuses {
    IN_PROCESS = "IN_PROCESS",
    DONE = "DONE",
}

// Actions

interface ISwitchTheme extends Action {

}

// Combine actions type

export type RecommendationsActions = ActionType<typeof actions>;
