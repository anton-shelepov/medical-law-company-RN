import { Action } from "redux";
import { ActionType } from "typesafe-actions";
import * as actions from "./recommendationsActions";

// Chat reducer state

export interface IChatState {
    chatInfo: ChatInfo
    messages: Message[]
}

// Chat reducer parts

export type Message = {
    id: number,
    text: string,
    userId: number,
    createdAt: string,
}

export type ChatInfo = {
    chatName: string,
    userName: string,
    userImageSrc: string,
}

// Actions

interface ISwitchTheme extends Action {

}

// Combine actions type

export type RecommendationsActions = ActionType<typeof actions>;
