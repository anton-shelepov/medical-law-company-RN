import {Action} from "redux";
import {ActionType} from "typesafe-actions";
import * as actions from "./profileActions";

// Profile reducer state

export interface IProfileState {
    profileData: ProfileData
}

// Profile reducer parts

export type ProfileData =  {
    userImageSrc: string,
    userName: string,
}

// Actions

interface ISwitchTheme extends Action {

}

// Combine actions type

export type ProfileActions = ActionType<typeof actions>;
