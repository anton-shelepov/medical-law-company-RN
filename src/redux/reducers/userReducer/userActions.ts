import { AxiosResponse } from "axios"
import { IAuthFormData } from "../../../components/_common/forms/AuthForm"
import { LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../../../constants/actionTypes"
import { ILogoutRequest, ILogoutSuccess, ISigninFailure, ISigninRequest, ISigninSuccess } from "./types"


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

export const signinSuccess = (): ISigninSuccess => ({
    type: SIGNIN_SUCCESS,
})

export const signinFailure = (error: any): ISigninFailure => ({
    type: SIGNIN_FAILURE,
    payload: true,
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
