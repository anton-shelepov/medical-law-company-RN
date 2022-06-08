import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../../../constants/actionTypes"


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

