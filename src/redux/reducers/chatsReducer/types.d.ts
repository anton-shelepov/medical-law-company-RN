import { Action } from "redux";
import { ActionType } from "typesafe-actions";
import * as actions from "./recommendationsActions";

// Root reducer state

export interface IChatsState {
    chats: ChatsItem[],
}

// Root reducer parts

export type ChatsItem = {
    id: number,
    imageURL: string,
    position?: string,
    fullName: string,
    lastMessage: string,
}

// Actions

interface ISwitchTheme extends Action {

}

// Combine actions type

export type RecommendationsActions = ActionType<typeof actions>;
