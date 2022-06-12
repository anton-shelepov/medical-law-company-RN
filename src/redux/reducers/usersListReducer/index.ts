import { PINNED_USERS_FETCH_FAILURE, PINNED_USERS_FETCH_REQUEST, PINNED_USERS_FETCH_SUCCESS } from "../../../constants/actionTypes";
import { IUsersListState, usersListActions } from "./types";

const initialState: IUsersListState = {
    data: {
        users: [],
    },
    error: {},
    isLoading: false,
}

const usersListReducer = (state = initialState, action: usersListActions): IUsersListState => {
    switch (action.type) {

        // ------ FETCH PINNED USERS ------

        case PINNED_USERS_FETCH_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: {},
            }

        case PINNED_USERS_FETCH_SUCCESS:
            return {
                ...state,
                data: {
                    users: action.payload,
                },
                isLoading: false,
                error: {}
            }

        case PINNED_USERS_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }


        default:
            return state
    }
}

export default usersListReducer;