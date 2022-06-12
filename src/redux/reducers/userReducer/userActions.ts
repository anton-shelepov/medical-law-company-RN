import { IAuthFormData } from "../../../components/_common/forms/AuthForm"
import { CURRENT_USER_DATA_FETCH_FAILURE, CURRENT_USER_DATA_FETCH_REQUEST, CURRENT_USER_DATA_FETCH_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../../../constants/actionTypes"
import { StateError } from "../../../types/errors"
import { ICurrentUserDataFetchFailure, ICurrentUserDataFetchRequest, ICurrentUserDataFetchSuccess, ILogoutFailure, ILogoutRequest, ILogoutSuccess, ISigninFailure, ISigninRequest, ISigninSuccess, Tokens, UserData } from "./types"


// SIGNUP

export const signupRequest = (data) => ({
    type: SIGNUP_REQUEST,
    payload: data
})

export const signupSuccess = () => ({
    type: SIGNUP_SUCCESS,
    payload: true,
})

export const signupFailure = (error: any) => ({
    type: SIGNUP_FAILURE,
    payload: true,
})

// SIGNIN

export const signinRequest = (formData: IAuthFormData): ISigninRequest => ({
    type: SIGNIN_REQUEST,
    payload: formData,
})

export const signinSuccess = (tokens: Tokens): ISigninSuccess => ({
    type: SIGNIN_SUCCESS,
    payload: tokens
})

export const signinFailure = (error: StateError | undefined): ISigninFailure => ({
    type: SIGNIN_FAILURE,
    payload: error,
})

// LOGOUT

export const logoutRequest = (): ILogoutRequest => ({
    type: LOGOUT_REQUEST,
})

export const logoutSuccess = (): ILogoutSuccess => ({
    type: LOGOUT_SUCCESS,
})

export const logoutFailure = (error: StateError): ILogoutFailure => ({
    type: LOGOUT_FAILURE,
    payload: error,
})

// CURRENT USER DATA

export const currentUserDataFetchRequest = (): ICurrentUserDataFetchRequest => ({
    type: CURRENT_USER_DATA_FETCH_REQUEST,
})

export const currentUserDataFetchSuccess = (currentUserData: UserData): ICurrentUserDataFetchSuccess => ({
    type: CURRENT_USER_DATA_FETCH_SUCCESS,
    payload: currentUserData
})

export const currentUserDataFetchFailure = (error: StateError): ICurrentUserDataFetchFailure => ({
    type: CURRENT_USER_DATA_FETCH_FAILURE,
    payload: error,
})