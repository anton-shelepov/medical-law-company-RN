import { Action } from "typesafe-actions";
import { IAuthFormData } from "../../../components/_common/forms/AuthForm";
import { LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../../../constants/actionTypes";
import { ActionType } from "typesafe-actions";
import * as actions from "./userActions";

// Root user state

export interface IUserState {
    isAuth: boolean,
    error: null | string,
    isLoading: boolean,
}

// Actions

export interface ISigninRequest extends Action {
    type: typeof SIGNIN_REQUEST
    payload: IAuthFormData,
}

export interface ISigninSuccess extends Action {
    type: typeof SIGNIN_SUCCESS
}

export interface ISigninFailure extends Action {
    type: typeof SIGNIN_FAILURE
    payload: string | unknown,
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

// Combine actions type

export type UserActions = ActionType<typeof actions>;