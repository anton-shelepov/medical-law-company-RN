import { Action, ActionType } from "typesafe-actions";
import { PINNED_USERS_FETCH_FAILURE, PINNED_USERS_FETCH_REQUEST, PINNED_USERS_FETCH_SUCCESS, SEARCHED_USERS_FETCH_FAILURE, SEARCHED_USERS_FETCH_REQUEST, SEARCHED_USERS_FETCH_SUCCESS } from "../../../constants/actionTypes";
import { StateError } from "../../../types/errors";
import * as actions from "./usersListActions";

// User reducer state

export interface IUsersListState {
    data: {
        users: UsersListItem[] | [],
    },
    error: StateError | {},
    isLoading: boolean,
}

// User reducer parts

export type UsersListItem = {
    id: number,
    fullName: string,
    phoneNumber: string,
    imageURL?: string,
}

// ACTIONS

// Pinned users fetch

export interface IPinnedUsersFetchRequest extends Action {
    type: typeof PINNED_USERS_FETCH_REQUEST
}

export interface IPinnedUsersFetchSuccess extends Action {
    type: typeof PINNED_USERS_FETCH_SUCCESS
    payload: UsersListItem[],
}

export interface IPinnedUsersFetchFailure extends Action {
    type: typeof PINNED_USERS_FETCH_FAILURE
    payload: StateError,
}

// Searched users fetch

export interface ISearchedUsersFetchRequest extends Action {
    type: typeof SEARCHED_USERS_FETCH_REQUEST
}

export interface ISearchedUsersFetchSuccess extends Action {
    type: typeof SEARCHED_USERS_FETCH_SUCCESS
    payload: UsersListItem[],
}

export interface ISearchedFetchFailure extends Action {
    type: typeof SEARCHED_USERS_FETCH_FAILURE
    payload: StateError,
}


// Common reducer types


// Combine actions type

export type usersListActions = ActionType<typeof actions>;