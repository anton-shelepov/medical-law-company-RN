import {Action} from "redux";
import {ActionType} from "typesafe-actions";
import { RecommendationsItem } from "../recommendationsReducer/types";
import * as actions from "./recommendationsActions";

// Root reducer state

export interface IRecommendationDetailsState {
    recommendationData: recommendationData,
    userRecommendationResults: UserRecommendationResult[]
}

// Root reducer parts

export type recommendationData = RecommendationsItem

export type UserRecommendationResult = {
    id: number,
    resultText: string,
    documentsImages: string[],
    sentDate: string,
}

// Actions

interface ISwitchTheme extends Action {

}

// Combine actions type

export type RecommendationsActions = ActionType<typeof actions>;
