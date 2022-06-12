import { CURRENT_USER_DATA_FETCH_FAILURE, CURRENT_USER_DATA_FETCH_REQUEST, CURRENT_USER_DATA_FETCH_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../../../constants/actionTypes";
import { AppRoles } from "../../../constants/enums";
import { IUserState, UserActions } from "./types";

const initialState: IUserState = {
    data: {
        fullName: '',
        id: null,
        role: AppRoles.USER,
    },
    accessToken: '',
    refreshToken: '',
    error: null,
    isLoading: false,
    isAuth: false,
}

const userReducer = (state = initialState, action: UserActions): IUserState => {
    switch (action.type) {

        // ------ SIGNIN ------

        case SIGNIN_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true,
            }

        case SIGNIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                isLoading: false,
                error: null,
            }

        case SIGNIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isAuth: false,
                accessToken: '',
                refreshToken: '',
                isLoading: false
            }

        // ------ LOGOUT ------

        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case LOGOUT_SUCCESS:
            return {
                ...initialState,
            }

        case LOGOUT_FAILURE:
            return {
                ...state,
            }

        // ------ CURRENT USER DATA ------

        case CURRENT_USER_DATA_FETCH_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            }

        case CURRENT_USER_DATA_FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: null,
            }

        case CURRENT_USER_DATA_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }


        default:
            return state
    }
}

export default userReducer;