import { Action, ActionType } from "typesafe-actions";
import { IAuthFormData } from "../../../components/_common/forms/AuthForm";
import { CURRENT_USER_DATA_FETCH_FAILURE, CURRENT_USER_DATA_FETCH_REQUEST, CURRENT_USER_DATA_FETCH_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../../../constants/actionTypes";
import { AppRoles } from "../../../constants/enums";
import { StateError } from "../../../types/errors";
import * as actions from "./userActions";

// User reducer state

export interface IUserState {
    data: UserData,
    accessToken: string,
    refreshToken: string,
    isAuth: boolean,
    error: StateError | null,
    isLoading: boolean,
}

// User reducer parts

export type UserData = {
    id: number,
    fullName: string,
    role: AppRoles,
    imageURL?: string,
    position?: string,
}

// Actions

export interface ISigninRequest extends Action {
    type: typeof SIGNIN_REQUEST
    payload: IAuthFormData
}

export interface ISigninSuccess extends Action {
    type: typeof SIGNIN_SUCCESS
    payload: Tokens
}

export interface ISigninFailure extends Action {
    type: typeof SIGNIN_FAILURE
    payload: StateError
}

export interface ILogoutRequest extends Action {
    type: typeof LOGOUT_REQUEST
}

export interface ILogoutSuccess extends Action {
    type: typeof LOGOUT_SUCCESS
}

export interface ILogoutFailure extends Action {
    type: typeof LOGOUT_FAILURE
    payload: string | unknown
}

export interface ICurrentUserDataFetchRequest extends Action {
    type: typeof CURRENT_USER_DATA_FETCH_REQUEST
}

export interface ICurrentUserDataFetchSuccess extends Action {
    type: typeof CURRENT_USER_DATA_FETCH_SUCCESS
    payload: UserData
}

export interface ICurrentUserDataFetchFailure extends Action {
    type: typeof CURRENT_USER_DATA_FETCH_FAILURE
    payload: StateError
}

// Common reducer types

export type Tokens = {
    accessToken: string,
    refreshToken: string,
}


// Combine actions type

export type UserActions = ActionType<typeof actions>;