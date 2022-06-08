import { SIGNIN_REQUEST } from "../../../constants/actionTypes";

const initialState: IUserState = {
    data: null,
    error: null,
    isLoading: false,
}

const usersListReducer = (state = initialState, action: UserActions): IUserState => {
    switch (action.type) {

        // ------ SIGNIN ------

        case SIGNIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            }


        default:
            return state
    }
}

export default usersListReducer;