import {Action} from "redux";
import {ActionType} from "typesafe-actions";
import { messageTypes } from "../../../constants/enums";
import * as actions from "./recommendationsActions";

// Root reducer state

export interface IChatsState {
    chats: ChatsItem[],
}

// Root reducer parts

export type ChatsItem = {
    id: number,
    userImageSrc: string,
    chatName?: string,
    userName: string,
    message: string,
    messageType: messageTypes,
}

// Actions

interface ISwitchTheme extends Action {

}

// Combine actions type

export type RecommendationsActions = ActionType<typeof actions>;
