import {Action} from "redux";
import {ActionType} from "typesafe-actions";
import * as actions from "./recommendationsActions";

// Root reducer state

export interface IChatsState {
    chats: ChatsItem[],
}

// Root reducer parts

export type ChatsItem = {
    id: number,
    avatarSrc: string,
    chatName?: string,
    author: string,
    message: string,
    messageType: MessageTypes,
}

export enum MessageTypes {
    FROM = "FROM",
    TO = "TO",
}

// Actions

interface ISwitchTheme extends Action {

}

// Combine actions type

export type RecommendationsActions = ActionType<typeof actions>;
