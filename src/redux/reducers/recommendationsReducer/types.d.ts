import {Action} from "redux";
import {ActionType} from "typesafe-actions";
import { recommendationStatuses } from "../../../constants/enums";
import * as actions from "./recommendationsActions";

// Root reducer state

export interface IRecommendationsState {
    recommendations: RecommendationsItem[],
}

// Root reducer parts

export type RecommendationsItem = {
    id: number,
    title: string,
    status: recommendationStatuses,
    executionTime: string,
    recommendationText: string,
    employeePosition: string,
}

// Actions

interface ISwitchTheme extends Action {

}

// Combine actions type

export type RecommendationsActions = ActionType<typeof actions>;
