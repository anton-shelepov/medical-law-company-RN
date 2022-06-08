import { LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../../../constants/actionTypes";
import { IUserState, UserActions } from "./types";

const initialState: IUserState = {
    data: {},
    accessToken: '',
    refreshToken: '',
    error: {},
    isLoading: false,
    isAuth: false,
}

const userReducer = (state = initialState, action: UserActions): IUserState => {
    switch (action.type) {

        // ------ SIGNIN ------

        case SIGNIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case SIGNIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                isLoading: false,
                error: {},
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
                ...state,
                isAuth: false,
                accessToken: '',
                refreshToken: '',
                isLoading: false,
                data: {},
            }

        case LOGOUT_FAILURE: // TODO: Обработать возможные ошибки
            return {
                ...state,
            }

        default:
            return state
    }
}

export default userReducer;