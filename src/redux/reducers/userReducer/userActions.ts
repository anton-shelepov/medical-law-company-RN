import { AxiosResponse } from "axios"
import { IAuthFormData } from "../../../components/_common/forms/AuthForm"
import { LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../../../constants/actionTypes"
import { ILogoutRequest, ILogoutSuccess, ISigninFailure, ISigninRequest, ISigninSuccess, Tokens } from "./types"


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

export const signinFailure = (error: string | null): ISigninFailure => ({
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

export const logoutFailure = (error: any) => ({
    type: LOGOUT_FAILURE,
    payload: error,
})
