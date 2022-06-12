import { PINNED_USERS_FETCH_FAILURE, PINNED_USERS_FETCH_REQUEST, PINNED_USERS_FETCH_SUCCESS } from "../../../constants/actionTypes"
import { StateError } from "../../../types/errors"
import { IPinnedUsersFetchFailure, IPinnedUsersFetchRequest, IPinnedUsersFetchSuccess, UsersListItem } from "./types"

// USERS FETCH

export const pinnedUsersFetchRequest = (): IPinnedUsersFetchRequest => ({
    type: PINNED_USERS_FETCH_REQUEST,
})

export const pinnedUsersFetchSuccess = (users: UsersListItem[]): IPinnedUsersFetchSuccess => ({
    type: PINNED_USERS_FETCH_SUCCESS,
    payload: users,
})

export const pinnedUsersFetchFailure = (error: StateError): IPinnedUsersFetchFailure => ({
    type: PINNED_USERS_FETCH_FAILURE,
    payload: error,
})

