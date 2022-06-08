import { Action, ActionType } from "typesafe-actions";
import { IAuthFormData } from "../../../components/_common/forms/AuthForm";
import { LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../../../constants/actionTypes";
import { StateError } from "../../../types/errors";
import * as actions from "./usersListActions";

// User reducer state

export interface IUsersListState {
    data: {
        users: UsersListItem[],
    },
    error: StateError,
    isLoading: boolean,
}

// User reducer parts

export type UsersListItem = {
    id: number,
    fullName: string,
    phoneNumber: string,
    imageURL?: string,
}

// Actions

export interface ISigninRequest extends Action {
    type: typeof SIGNIN_REQUEST
    payload: IAuthFormData,
}

export interface ISigninSuccess extends Action {
    type: typeof SIGNIN_SUCCESS
    payload: Tokens
}

export interface ISigninFailure extends Action {
    type: typeof SIGNIN_FAILURE
    payload: StateError,
}

export interface ILogoutRequest extends Action {
    type: typeof LOGOUT_REQUEST
}

export interface ILogoutSuccess extends Action {
    type: typeof LOGOUT_SUCCESS
}

export interface ILogoutFailure extends Action {
    type: typeof LOGOUT_FAILURE
    payload: string | unknown,
}

// Common reducer types

export type Tokens = {
    accessToken: string,
    refreshToken: string,
}


// Combine actions type

export type UserActions = ActionType<typeof actions>;